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
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
