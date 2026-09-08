#!/bin/sh
# .lefthook/check-ci-env.sh
ENV_FILE="src/env.ts"
CI_FILE=".github/workflows/ci.yml"

SCHEMA_KEYS=$(grep -oE '^\s+[A-Z_]+:' "$ENV_FILE" | grep -oE '[A-Z_]+' | sort -u)

# Chỉ lấy đoạn từ dòng "run: npm run build" tới hết block env: ngay sau nó
BUILD_ENV_BLOCK=$(awk '/run: npm run build/{flag=1} flag{print} flag && /^\s*$/{flag=0}' "$CI_FILE")
CI_ENV_KEYS=$(echo "$BUILD_ENV_BLOCK" | grep -oE '^\s+[A-Z_]+:\s*\$\{\{' | grep -oE '[A-Z_]+' | sort -u)

MISSING_IN_CI=""
for key in $SCHEMA_KEYS; do
  if ! echo "$CI_ENV_KEYS" | grep -qx "$key"; then
    MISSING_IN_CI="${MISSING_IN_CI}
$key"
  fi
done

TYPO_IN_CI=""
for key in $CI_ENV_KEYS; do
  if ! echo "$SCHEMA_KEYS" | grep -qx "$key"; then
    TYPO_IN_CI="${TYPO_IN_CI}
$key"
  fi
done

if [ -n "$MISSING_IN_CI" ] || [ -n "$TYPO_IN_CI" ]; then
  echo "🚫 ci.yml build env is out of sync with $ENV_FILE:"
  if [ -n "$MISSING_IN_CI" ]; then
    echo ""
    echo "In env.ts schema but NOT wired in ci.yml build step (build will fail on CI):"
    echo "$MISSING_IN_CI"
  fi
  if [ -n "$TYPO_IN_CI" ]; then
    echo ""
    echo "In ci.yml build step but NOT in env.ts schema (typo, or legacy variable):"
    echo "$TYPO_IN_CI"
  fi
  exit 1
fi