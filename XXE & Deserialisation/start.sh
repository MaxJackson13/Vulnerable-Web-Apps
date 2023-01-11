#!/bin/bash

docker build . -t node-app --build-arg .dockerignore=.dockerignore

docker run -d -p 5000:5000 node-app
