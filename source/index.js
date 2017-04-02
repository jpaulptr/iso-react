'use strict';

const express = require('express');
const app = express();

const PORT_NUMBER = 8000;
const Console = console;

const home = require('./routes/home');

app.use('/', home);

app.listen(PORT_NUMBER, () => {
    Console.log('App listening on port ', PORT_NUMBER);
});

module.exports = app;