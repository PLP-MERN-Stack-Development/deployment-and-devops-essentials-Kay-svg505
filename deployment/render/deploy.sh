#!/bin/bash
# Simple script to trigger Render deployment
curl -X POST -H "Authorization: Bearer $RENDER_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{}' \
     "https://api.render.com/deploy/srv-xxxxxxxxxxxxxxxx"
