const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.parts
            .findAll(req.query)
            .then(dbparts => res.json(dbparts))
            .catch(err => res.status(422).json(err));
    },
    post: function(req, res) {
        console.log(req.body)
        db.parts
            .create(req.body)
            .then(dbparts => res.json(dbparts))
            .catch(err => res.status(422).json(err));
    },
    put: function(req, res) {
        db.parts
        .update(
            {stock: stock - req.body.stock}, {
                where: {parts_id: req.body.parts_id}
            })
        .then(dbparts => res.json(dbparts))
        .catch(err => res.status(422).json(err));
        } 
}

  