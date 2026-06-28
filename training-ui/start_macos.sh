#!/bin/bash
set -e

# Navigate to the script's directory
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SCRIPT_DIR"

if [ -x "$ROOT_DIR/.tools/node/bin/node" ]; then
    export PATH="$ROOT_DIR/.tools/node/bin:$PATH"
fi

echo "Starting Anima Training UI on macOS..."

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
    echo "[ERROR] Node.js/npm not found. Run ./setup_env.sh first or install Node.js."
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Installing dependencies..."
    npm install
fi

npm start
