#!/bin/bash

# echo 'loading…' &&
{ # hide output

/usr/local/bin/node ./src/init-app;

} &> npm-debug.log &&
cat ./output.html