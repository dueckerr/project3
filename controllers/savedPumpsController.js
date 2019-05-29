const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.savedPumps
            .findAll(req.query)
            .then(dbsavedPumps => res.json(dbsavedPumps))
            .catch(err => res.status(422).json(err));
    },
    post: function(req, res) {
        console.log(req.body)
        db.savedPumps
            .create(req.body)
            .then(dbsavedPumps => res.json(dbsavedPumps))
            .catch(err => res.status(422).json(err));
    }
}