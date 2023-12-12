'use strict';

var express = require ('express');
var bodyParser = require('body-parser');

var app = express();
var cars = require ('./routers/cars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', cars)

module.exports = app;