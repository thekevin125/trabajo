'use strict'
var Games = require('../models/brand')
var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: "xd:v"
        })
    },
    test: function (req, res) {
        return res.status(200).send({
            message: "vamos ps"
        })
    },
    //agregar un proyecto
    savegames: function (req, res) {
        var games = new Games();
        var params = req.body

        games.name = params.name
        games.description = params.description
        games.developer = params.developer

        games.save((err, gameStored) => {
            if (err) return res.status(500).send({ message: "error al guardar documento" })
            if (!gameStored) return res.status(404).send({ message: "no se pudo guardar el documento" })
            return res.status(200).send({ games: gameStored })
        })
    },
    getgame: function (req, res) {
        var gamesId = req.params._id
        if (gamesId == null) return res.status(404).send({ message: "no se pudo encontrar el documento" })

        Games.findID(gamesId, (err, games) => {
            if (err) return res.status(500).send({ message: "error al retornar los datos" })
            if (!games) return res.status(404).send({ message: "no se pudo encontrar el documento" })
            return res.status(200).send({ games })
        })
    }
}

module.exports = controller