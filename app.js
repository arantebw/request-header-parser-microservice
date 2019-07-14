// app.js
'use strict';
const express = require('express');
const cors = require('cors');
const sass = require('node-sass-middleware')

const app = express();

// Middlewares
app.use(cors({ optionSuccessStatus: 200 }));
app.use(sass({
  src: __dirname + '/assets',
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'compressed'
}));

// Import Font Awesome
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));

// Import assets
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log('root route');
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    "ip-address": req.ip.split(':')[req.ip.length - 1],
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  });
});

module.exports = app;
