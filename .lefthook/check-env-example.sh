#!/bin/sh
ENV_FILE="src/env.ts"
EXAMPLE_FILE=".env.example"

if [ ! -f "$EXAMPLE_FILE" ]; then
  echo "🚫 $EXAMPLE_FILE not found. Create it with all variables from $ENV_FILE."
  exit 1
fi

SCHEMA_KEYS=$(grep -oE '^\s+[A-Z_]+:' "$ENV_FILE" | grep -oE '[A-Z_]+' | sort -u)
EXAMPLE_KEYS=$(grep -oE '^[A-Z_]+' "$EXAMPLE_FILE" | sort -u)

MISSING=""
for key in $SCHEMA_KEYS; do
  if ! echo "$EXAMPLE_KEYS" | grep -qx "$key"; then
    MISSING="${MISSING}
$key"
  fi
done

EXTRA=""
for key in $EXAMPLE_KEYS; do
  if ! echo "$SCHEMA_KEYS" | grep -qx "$key"; then
    EXTRA="${EXTRA}
$key"
  fi
done

if [ -n "$MISSING" ] || [ -n "$EXTRA" ]; then
  echo "🚫 $EXAMPLE_FILE is out of sync with $ENV_FILE:"
  if [ -n "$MISSING" ]; then
    echo ""
    echo "Missing (add to .env.example):"
    echo "$MISSING"
  fi
  if [ -n "$EXTRA" ]; then
    echo ""
    echo "Extra (remove from .env.example, no longer in env.ts):"
    echo "$EXTRA"
  fi
  exit 1
fi