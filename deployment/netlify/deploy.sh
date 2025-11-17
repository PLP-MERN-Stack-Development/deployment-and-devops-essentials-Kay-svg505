#!/bin/bash
# Deploy React frontend to Netlify
netlify deploy --dir=../client/build --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
