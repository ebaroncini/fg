#!/bin/bash

ng build --prod --base-href https://ebaroncini.github.io/fg/ --aot && rm docs/*.* &&  rm docs/js/*.* && cp dist/angular/*.* docs/ && cp dist/angular/js/*.* docs/js && cp docs/index.html docs/404.html && echo OK

