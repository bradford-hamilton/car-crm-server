'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import routes from './routes/routes';

var app = express();

var dotenv = require('dotenv');
var environment = process.env.NODE_ENV || 'development';
if (environment == 'development' || environment == 'test') {
  dotenv.config();
}

app.get('/robots.txt', function(req, res, next) {
  res.type('text/plain');
  if (environment === 'production') {
    res.send('User-agent: *\nDisallow:');
  } else {
    res.send('User-agent: *\nDisallow: /');
  }
});

app.use(cookieParser());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/*'}));

routes.init(app);

app.use(function(req, res, next){
  res.status(404);
  res.send({ error: 'Not found' });
});

app.listen(process.env.PORT || 3000);
