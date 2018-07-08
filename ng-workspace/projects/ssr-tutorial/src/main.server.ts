import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import * as express from 'express';
import {ngExpressEngine} from '@nguniversal/express-engine';
import { AppServerModule } from './app/app.server.module';


declare var __dirname: any;
declare var require: any;

const path = require('path');

if (environment.production) {
  enableProdMode();
}

const app = express();

const pathOfBrowserStatic = path.resolve(__dirname, '../ssr-tutorial');
console.log(pathOfBrowserStatic);

// express templates

// we can connect different template language
// express we can choose what templating language to use
// express can read html like template replace data present full html page

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

// app.set is used for express configuration
// set view engine sets which view engine we want to use from the engines we loaded
// set views which directory are templates are located
app.set('view engine', 'html');
app.set('views', pathOfBrowserStatic);

// loading a template engine adds command to response: res.render()

app.use('*.*', express.static(pathOfBrowserStatic));

app.get('*', function(req, res, next) {
  res.render('index', {
    req: req
  })
})

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
  console.log('my server is now listening on port 3001');
})

// express

// install express

/// npm install express --save