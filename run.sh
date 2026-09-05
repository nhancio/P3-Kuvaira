#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to run Kuvaira." >&2
  exit 1
fi

if [[ ! -x node_modules/.bin/vite ]]; then
  echo "Installing dependencies..."
  npm install --no-audit --no-fund
fi

echo "Starting Kuvaira at http://localhost:8080"
exec npm run dev
