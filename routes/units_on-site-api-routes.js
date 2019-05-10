var db = require("../models");

module.exports = function(app) {
  // Get all unitsOnSite
  app.get("/api/unitsOnSite", function(req, res) {
    db.unitsOnSite.findAll({}).then(function(dbunitsOnSite) {
      res.json(dbunitsOnSite);
    });
  });

  app.get("/api/unitsOnSite/unit_id:unit_id", function(req, res) {
    db.unitsOnSite
      .findAll({ where: { unit_id: req.params.unit_id } })
      .then(function(dbunitsOnSite) {
        res.json(dbunitsOnSite);
      });
  });

  // Create a new unitsOnSite
  app.post("/api/unitsOnSite", function(req, res) {
    db.unitsOnSite.create(req.body).then(function(dbunitsOnSite) {
      res.json(dbunitsOnSite);
    });
  });

  // Delete unitsOnSite by id
  app.delete("/api/unitsOnSite/:logs_id", function(req, res) {
    db.unitsOnSite
      .destroy({ where: { logs_id: req.params.logs_id } })
      .then(function(dbunitsOnSite) {
        res.json(dbunitsOnSite);
      });
  });
};
