#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

GITHUB_ACCOUNT="${GITHUB_ACCOUNT:-didigamnithin}"
BRANCH="$(git branch --show-current)"

[[ "$BRANCH" == "main" ]] || { echo "Deploy from main, not $BRANCH." >&2; exit 1; }
command -v gh >/dev/null || { echo "GitHub CLI (gh) is required." >&2; exit 1; }
gh auth token --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null 2>&1 || {
  echo "GitHub CLI is not authenticated as $GITHUB_ACCOUNT." >&2
  exit 1
}

npm run build
git diff --check
git add -A

if ! git diff --cached --quiet; then
  git commit -m "${1:-Deploy: $(date '+%Y-%m-%d %H:%M')}"
fi

gh auth switch --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null
git push origin main

echo "Pushed main. Netlify is deploying https://kuvaira.in"
