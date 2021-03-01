#!/bin/bash

ng build --prod --base-href https://ebaroncini.github.io/fg/ --aot && rm docs/*.* && cp dist/angular/*.* docs/ && cp docs/index.html docs/404.html && echo OK

