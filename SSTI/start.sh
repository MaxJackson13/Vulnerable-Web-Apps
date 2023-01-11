#!/bin/bash

docker build . -t node-ssti --build-arg .dockerignore=.dockerignore

docker run -d -p 5000:5000 node-ssti
