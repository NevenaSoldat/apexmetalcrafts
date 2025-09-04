#!/bin/bash

# Development Setup Script for Apex Metal Crafts
echo "🔧 Setting up development environment..."

# Check if nvm is installed
if ! command -v nvm &> /dev/null; then
    echo "❌ nvm is not installed. Please install nvm first."
    exit 1
fi

# Use the correct Node version
echo "📦 Switching to Node.js 20.19.5..."
nvm use 20.19.5

if [ $? -ne 0 ]; then
    echo "❌ Node.js 20.19.5 not found. Installing..."
    nvm install 20.19.5
    nvm use 20.19.5
fi

# Set as default
nvm alias default 20.19.5

# Clear npm cache and command hash
echo "🧹 Clearing caches..."
npm cache clean --force
hash -r

# Verify versions
echo "✅ Node version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
fi

# Start development server
echo "🚀 Starting development server..."
npm run dev
