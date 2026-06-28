const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const PROJECT_UV_CACHE = path.join(ROOT_DIR, '.uv-cache');
const PROJECT_UV_PYTHON = path.join(ROOT_DIR, '.uv-python');

function getPythonCmd() {
    const venvPath = path.join(ROOT_DIR, 'venv');
    if (process.platform === 'win32') {
        const p = path.join(venvPath, 'Scripts', 'python.exe');
        return fs.existsSync(p) ? p : 'python';
    } else {
        const p = path.join(venvPath, 'bin', 'python');
        return fs.existsSync(p) ? p : 'python3';
    }
}

function tryExecutable(cmd, args = ['--version']) {
    try {
        execFileSync(cmd, args, { stdio: 'pipe' });
        return true;
    } catch {
        return false;
    }
}

function getUvCmd() {
    const candidates = [
        process.env.UV,
        path.join(ROOT_DIR, '.tools', 'bin', process.platform === 'win32' ? 'uv.exe' : 'uv'),
        process.env.HOME ? path.join(process.env.HOME, 'AI', '.tools', 'bin', 'uv') : null,
        'uv',
    ].filter(Boolean);

    for (const candidate of candidates) {
        if (tryExecutable(candidate)) return candidate;
    }
    return null;
}

function packageEnv() {
    return {
        ...process.env,
        UV_CACHE_DIR: process.env.UV_CACHE_DIR || PROJECT_UV_CACHE,
        UV_PYTHON_INSTALL_DIR: process.env.UV_PYTHON_INSTALL_DIR || PROJECT_UV_PYTHON,
    };
}

function canImport(pythonCmd, moduleName) {
    try {
        execFileSync(pythonCmd, ['-c', `import ${moduleName}`], {
            stdio: 'pipe',
            env: packageEnv(),
        });
        return true;
    } catch {
        return false;
    }
}

function installEditable(pythonCmd, pkgPath) {
    const uvCmd = getUvCmd();
    if (uvCmd) {
        execFileSync(uvCmd, ['pip', 'install', '--python', pythonCmd, '--no-deps', '-e', pkgPath], {
            stdio: 'pipe',
            env: packageEnv(),
        });
        return;
    }

    execFileSync(pythonCmd, ['-m', 'pip', 'install', '--no-deps', '-e', pkgPath], {
        stdio: 'pipe',
        env: packageEnv(),
    });
}

function ensurePackage(pkgPath, moduleName, { label, unavailableMsg, fixHint }) {
    if (!fs.existsSync(pkgPath)) return;
    const pythonCmd = getPythonCmd();
    if (canImport(pythonCmd, moduleName)) {
        console.log(`[setup] ${label} verified.`);
        return;
    }
    console.log(`[setup] Installing ${label}...`);
    try {
        installEditable(pythonCmd, pkgPath);
        console.log(`[setup] ${label} installed.\n`);
    } catch {
        console.warn(`[setup] Could not install ${label}. ${unavailableMsg}`);
        if (fixHint) console.warn(`[setup] To fix manually, run: ${fixHint}\n`);
    }
}

function ensureCudaDirectBackend() {
    if (process.platform !== 'win32') return;
    ensurePackage(
        path.join(ROOT_DIR, 'cuda_direct_pkg'),
        'cuda_direct_backend',
        {
            label: 'cuda_direct_backend',
            unavailableMsg: 'Multi-GPU cuda_direct will be unavailable.',
            fixHint: null,
        }
    );
}

function ensureWdParallel() {
    if (process.platform === 'darwin') {
        console.log('[setup] Skipping wd_parallel on macOS; TP/SP training is CUDA-only.');
        return;
    }

    const pkgPath = path.join(ROOT_DIR, 'wd_parallel_pkg');
    ensurePackage(
        pkgPath,
        'wd_parallel',
        {
            label: 'wd_parallel',
            unavailableMsg: 'TP/SP training may be unavailable.',
            fixHint: `uv pip install --no-deps -e "${pkgPath}"`,
        }
    );
}

function runSetup() {
    ensureCudaDirectBackend();
    ensureWdParallel();
}

module.exports = { runSetup };
