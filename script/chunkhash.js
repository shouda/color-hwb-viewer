#!/usr/bin/env node

/* eslint-disable strict */

'use strict';

const fs = require('fs');
const path = require('path');

const jsonContent = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dist/stats.json')));

let htmlContent = fs.readFileSync(path.resolve(__dirname, '../src/index.html')).toString();

htmlContent = htmlContent.replace(
  ' src="./vendors.js"',
  ` src="./${jsonContent.assetsByChunkName.vendors[0]}"`);

htmlContent = htmlContent.replace(
  ' src="./app.js"',
  ` src="./${jsonContent.assetsByChunkName.app[0]}"`);

fs.writeFileSync(path.resolve(__dirname, '../dist/index.html'), htmlContent);
