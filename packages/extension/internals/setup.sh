#!/bin/bash
if [ $CI ]; then
  echo "EXTENSION_ID=$EXTENSION_ID" > .env
  echo "CLIENT_ID=$CLIENT_ID" >> .env
  echo "CLIENT_SECRET=$CLIENT_SECRET" >> .env
  echo "REFRESH_TOKEN=$REFRESH_TOKEN" >> .env
  echo "WEB_EXT_API_KEY=$WEB_EXT_API_KEY" >> .env
  echo "WEB_EXT_API_SECRET=$WEB_EXT_API_SECRET" >> .env
fi