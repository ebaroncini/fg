#!/bin/bash

docker run -d \
  --name=nginxtest \
  --mount type=bind,source="$(pwd)/dist/angular",destination=/usr/share/nginx/html \
  --mount type=bind,source="$(pwd)/nginx.conf",destination=/etc/nginx/conf.d/default.conf \
  -p 80:80 \
  nginx:latest
