#!/usr/bin/env bash
set -euo pipefail

log() { printf "\033[1;32m[+]\033[0m %s\n" "$*"; }
warn() { printf "\033[1;33m[!]\033[0m %s\n" "$*"; }
err() { printf "\033[1;31m[x]\033[0m %s\n" "$*"; }

detect_pkg_mgr() {
  if command -v brew >/dev/null 2>&1; then echo brew; return; fi
  if command -v apt-get >/dev/null 2>&1; then echo apt-get; return; fi
  if command -v dnf >/dev/null 2>&1; then echo dnf; return; fi
  if command -v yum >/dev/null 2>&1; then echo yum; return; fi
  if command -v pacman >/dev/null 2>&1; then echo pacman; return; fi
  echo ""; return 0
}

ensure_git() {
  if command -v git >/dev/null 2>&1; then return 0; fi
  warn "git not found. Attempting to install..."
  local pkg
  pkg=$(detect_pkg_mgr)
  case "$pkg" in
    brew) brew install git ;;
    apt-get) sudo apt-get update && sudo apt-get install -y git ;;
    dnf) sudo dnf install -y git ;;
    yum) sudo yum install -y git ;;
    pacman) sudo pacman -Sy --noconfirm git ;;
    *)
      err "No supported package manager found. Please install git manually."
      exit 1
      ;;
  esac
}

ensure_bun() {
  if command -v bun >/dev/null 2>&1; then return 0; fi
  warn "bun not found. Installing via bun.sh..."
  curl -fsSL https://bun.sh/install | bash
  # shellcheck disable=SC1090
  if [ -f "$HOME/.bun/bin/bun" ]; then export BUN_INSTALL="$HOME/.bun"; export PATH="$BUN_INSTALL/bin:$PATH"; fi
}

ensure_foundry() {
  if command -v anvil >/dev/null 2>&1; then return 0; fi
  warn "Foundry (anvil) not found. Installing..."
  curl -L https://foundry.paradigm.xyz | bash
  export PATH="$HOME/.foundry/bin:$PATH"
  # shellcheck disable=SC1090
  if command -v foundryup >/dev/null 2>&1; then foundryup; fi
}

main() {
  log "Checking prerequisites (git, bun, foundry)..."
  ensure_git
  ensure_bun
  ensure_foundry

  if [ ! -d "specialk" ]; then
    log "Cloning SpecialK starter kit..."
    git clone https://github.com/katana-network/specialk
  else
    log "Repository 'specialk' already exists. Pulling latest..."
    (cd specialk && git pull --ff-only || true)
  fi

  cd specialk

  log "Installing dependencies (bun install)..."
  bun install

  # Create .env if example exists
  if [ -f .env.example ] && [ ! -f .env ]; then
    log "Creating .env from .env.example..."
    cp .env.example .env
  fi

  log "Building all (bun run build:all)..."
  bun run build:all

  log "Forking Wrapping example into the app..."
  PHONEHOME_META='{"example":"wrapping"}' bun run fork wrapping --yes

  cat << 'EOF'

Next steps:
1) Terminal A:  bun run start:anvil katana   # start a local Katana fork
2) Terminal B:  bun run dev                  # serve the app

Open the provided localhost URL in your browser.
EOF
}

main "$@"


