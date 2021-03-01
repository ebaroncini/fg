#!/bin/bash

ng build --prod --base-href https://flaviagiustino.com.ar/ --aot && rm flaviagiustino.com.ar/*.* && cp dist/angular/*.* flaviagiustino.com.ar/ && cp flaviagiustino.com.ar/index.html flaviagiustino.com.ar/404.html && echo OK

