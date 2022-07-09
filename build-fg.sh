#!/bin/bash

ng build --prod --base-href https://flaviagiustino.com.ar/ --aot && rm flaviagiustino.com.ar/*.* && rm flaviagiustino.com.ar/js/*.* && cp dist/angular/*.* flaviagiustino.com.ar/ && cp dist/angular/js/*.* flaviagiustino.com.ar/js && cp flaviagiustino.com.ar/index.html flaviagiustino.com.ar/404.html && cp flaviagiustino.com.ar/index.html flaviagiustino.com.ar/404.shtml && echo OK

