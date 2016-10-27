const jsdom = require('jsdom').jsdom;

/* eslint-env browser */
global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
