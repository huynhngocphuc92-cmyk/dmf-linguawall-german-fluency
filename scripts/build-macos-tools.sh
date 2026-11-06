#!/usr/bin/env bash
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$DIR/bin" "$DIR/generated"

echo "Compiling macOS native wallpaper setter..."
swiftc "$DIR/macos/SetWallpaper.swift" -o "$DIR/bin/set-wallpaper"

echo "Compiling macOS native Menu Bar quick controller..."
swiftc "$DIR/macos/LinguaWallMenuBar.swift" -o "$DIR/bin/LinguaWallMenuBar"

echo "Successfully built bin/set-wallpaper and bin/LinguaWallMenuBar"
