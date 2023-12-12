
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamesSchema = Schema({
    name: String,
    description: String,
})
module.exports = mongoose.model('games', GamesSchema)