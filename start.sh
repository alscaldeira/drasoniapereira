#!/bin/bash
set -e

npm ci
npm run build

if command -v pm2 >/dev/null 2>&1; then
  pm2 start npm --name drsoniapereira -- start
  pm2 save
else
  npm run start
fi
