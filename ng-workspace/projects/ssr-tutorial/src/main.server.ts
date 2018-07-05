import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import * as express from 'express';


declare var __dirname: any;
declare var require: any;

const path = require('path');

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';


const app = express();

const pathOfBrowserStatic = path.resolve(__dirname, '../ssr-tutorial');
console.log(pathOfBrowserStatic);

app.use(express.static(pathOfBrowserStatic));

// /about
// /about.js

// app.get('*', function(req, res, next) {
//   res.send('<h1>hello world</h1>');
//   // next();
// });

// const dir = 'c:/app/stam/';
// const angularapp = '/angular/app';

// path.resolve('dist/', '/app') // dist/app

// app.get('*', function(req, res, next) {
//   console.log('next middleware');
// });

app.listen(3001, function() {
  console.log('my server is now listening on port 3000');
})

// express

// install express

/// npm install express --save