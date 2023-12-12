'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Carros')
    .then(() => {
        console.log('Conexión a la base de datos exitosa');

        //creacion del servidor

        app.listen(port, () => {
            console.log('servidor funciona correctamente');
        })


    })
    .catch(err => console.log(err));