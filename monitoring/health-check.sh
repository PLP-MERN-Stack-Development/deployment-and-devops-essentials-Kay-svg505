#!/bin/bash
# Simple health check for backend
BACKEND_URL=${1:-http://localhost:5000/healthz}

status_code=$(curl --write-out "%{http_code}" --silent --output /dev/null $BACKEND_URL)

if [ $status_code -eq 200 ]; then
  echo "Backend is healthy ✅"
else
  echo "Backend is DOWN ❌"
fi
