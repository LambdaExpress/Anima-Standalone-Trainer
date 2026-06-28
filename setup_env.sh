#!/bin/bash
set -e

# Navigate to the script's directory
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

UNAME_S="$(uname -s)"
IS_MACOS=0
if [ "$UNAME_S" = "Darwin" ]; then
    IS_MACOS=1
fi

TOOLS_DIR="$ROOT_DIR/.tools"
DOWNLOADS_DIR="$ROOT_DIR/.downloads"
export UV_CACHE_DIR="${UV_CACHE_DIR:-$ROOT_DIR/.uv-cache}"
export UV_PYTHON_INSTALL_DIR="${UV_PYTHON_INSTALL_DIR:-$ROOT_DIR/.uv-python}"

echo "----------------------------------------------------------------------"
echo "Checking Prerequisites..."
echo "----------------------------------------------------------------------"

find_uv() {
    if command -v uv >/dev/null 2>&1; then
        command -v uv
        return 0
    fi
    if [ -x "$ROOT_DIR/.tools/bin/uv" ]; then
        echo "$ROOT_DIR/.tools/bin/uv"
        return 0
    fi
    if [ -x "$HOME/AI/.tools/bin/uv" ]; then
        echo "$HOME/AI/.tools/bin/uv"
        return 0
    fi
    return 1
}

install_local_node_macos() {
    if ! command -v curl >/dev/null 2>&1; then
        echo "[ERROR] curl is required to install local Node.js on macOS."
        echo "Install Node.js manually or place node/npm on PATH."
        exit 1
    fi

    local node_version="${NODE_VERSION:-v22.17.1}"
    local machine
    local node_arch
    machine="$(uname -m)"
    case "$machine" in
        arm64) node_arch="arm64" ;;
        x86_64) node_arch="x64" ;;
        *)
            echo "[ERROR] Unsupported macOS architecture for bundled Node.js: $machine"
            exit 1
            ;;
    esac

    local node_dir="$TOOLS_DIR/node-$node_version-darwin-$node_arch"
    local node_link="$TOOLS_DIR/node"
    if [ ! -x "$node_dir/bin/node" ]; then
        mkdir -p "$TOOLS_DIR" "$DOWNLOADS_DIR"
        local archive="node-$node_version-darwin-$node_arch.tar.gz"
        local url="https://nodejs.org/dist/$node_version/$archive"
        echo "[INFO] Installing local Node.js $node_version for macOS into $node_dir"
        curl -fL --retry 3 -o "$DOWNLOADS_DIR/$archive.part" "$url"
        mv -f "$DOWNLOADS_DIR/$archive.part" "$DOWNLOADS_DIR/$archive"
        tar -xzf "$DOWNLOADS_DIR/$archive" -C "$TOOLS_DIR"
    fi
    ln -sfn "$node_dir" "$node_link"
    export PATH="$node_link/bin:$PATH"
}

ensure_node() {
    if command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
        echo "Node.js detected: $(node --version)"
        return 0
    fi

    if [ "$IS_MACOS" -eq 1 ]; then
        echo "[INFO] Node.js is not on PATH. Installing a project-local Node.js for macOS."
        install_local_node_macos
        echo "Node.js detected: $(node --version)"
        return 0
    fi

    echo ""
    echo "[INFO] Node.js is not installed. Attempting automatic installation..."
    echo ""

    if ! command -v curl >/dev/null 2>&1; then
        echo "[ERROR] curl is required for automatic Node.js installation but was not found."
        echo "Please install curl (e.g. sudo apt install curl) or install Node.js manually from: https://nodejs.org/"
        echo ""
        exit 1
    fi

    NODE_INSTALLED=0

    NODE_MAJOR=$(curl -fsSL https://nodejs.org/dist/index.json | grep -o '"version":"v[0-9]*' | head -1 | grep -o '[0-9]*$')
    if [ -z "$NODE_MAJOR" ]; then
        echo "[WARN] Could not determine latest Node.js version. Defaulting to current channel."
        NODE_MAJOR="current"
    fi
    echo "Latest Node.js major version: $NODE_MAJOR"

    if command -v apt-get >/dev/null 2>&1; then
        echo "Detected apt-get (Debian/Ubuntu). Installing Node.js..."
        curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | sudo -E bash - && \
        sudo apt-get install -y nodejs && NODE_INSTALLED=1

    elif command -v dnf >/dev/null 2>&1; then
        echo "Detected dnf (Fedora/RHEL). Installing Node.js..."
        curl -fsSL "https://rpm.nodesource.com/setup_${NODE_MAJOR}.x" | sudo bash - && \
        sudo dnf install -y nodejs && NODE_INSTALLED=1

    elif command -v yum >/dev/null 2>&1; then
        echo "Detected yum (CentOS/RHEL). Installing Node.js..."
        curl -fsSL "https://rpm.nodesource.com/setup_${NODE_MAJOR}.x" | sudo bash - && \
        sudo yum install -y nodejs && NODE_INSTALLED=1

    elif command -v pacman >/dev/null 2>&1; then
        echo "Detected pacman (Arch Linux). Installing Node.js..."
        sudo pacman -Sy --noconfirm nodejs npm && NODE_INSTALLED=1

    elif command -v zypper >/dev/null 2>&1; then
        echo "Detected zypper (openSUSE). Installing Node.js..."
        sudo zypper install -y nodejs npm && NODE_INSTALLED=1

    else
        echo "[ERROR] No supported package manager found (apt, dnf, yum, pacman, zypper)."
        echo "Please install Node.js manually from: https://nodejs.org/"
        echo ""
        exit 1
    fi

    if [ "$NODE_INSTALLED" -ne 1 ]; then
        echo ""
        echo "[ERROR] Node.js installation failed."
        echo "Please install Node.js manually from: https://nodejs.org/"
        echo ""
        exit 1
    fi

    if ! command -v node >/dev/null 2>&1; then
        echo ""
        echo "[ERROR] Node.js still not found after installation."
        echo "Try opening a new terminal and running this script again."
        echo ""
        exit 1
    fi
}

ensure_node
echo ""

if ! UV_CMD="$(find_uv)"; then
    echo "[ERROR] uv is required for this setup script."
    echo "Install uv or set PATH so uv is available. On isolated machines, placing uv at \$HOME/AI/.tools/bin/uv is supported."
    exit 1
fi

echo "Using uv: $UV_CMD"
echo "UV_CACHE_DIR=$UV_CACHE_DIR"
echo "UV_PYTHON_INSTALL_DIR=$UV_PYTHON_INSTALL_DIR"

PYTHON_VERSION="${PYTHON_VERSION:-3.12}"
if [ ! -d "venv" ]; then
    echo "Creating venv with uv (Python $PYTHON_VERSION)..."
    "$UV_CMD" venv --python "$PYTHON_VERSION" venv
else
    echo "Venv already exists."
fi

if [ ! -f "venv/bin/activate" ]; then
    echo ""
    echo "[ERROR] venv/bin/activate not found!"
    echo "Try deleting the venv folder and running this script again."
    echo ""
    exit 1
fi

source venv/bin/activate

REQUIREMENTS_FILE="requirements.txt"
if [ "$IS_MACOS" -eq 1 ]; then
    REQUIREMENTS_FILE="requirements-macos.txt"
fi

echo "----------------------------------------------------------------------"
echo "Installing requirements from $REQUIREMENTS_FILE with uv..."
echo "----------------------------------------------------------------------"
"$UV_CMD" pip install -r "$REQUIREMENTS_FILE"

echo ""
echo "----------------------------------------------------------------------"
echo "Installing UI dependencies (npm install)..."
echo "----------------------------------------------------------------------"
cd training-ui
npm install
cd ..

echo ""
echo "----------------------------------------------------------------------"
echo "Installation Complete!"
echo "----------------------------------------------------------------------"
