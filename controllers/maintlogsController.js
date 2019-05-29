const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.maintenance_logs
            .findAll(req.query)
            .then(dbmaintenance => res.json(dbmaintenance))
            .catch(err => res.status(422).json(err));
    },
    post: function(req, res) {
        console.log(req.body)
        db.maintenance_logs
            .create(req.body)
            .then(dbmaintenance => res.json(dbmaintenance))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.maintenance_logs
        .findOne({where: {DH1_valve = 1}})
    }
}



// function(app) {
//   // Get all maintenance_logs
//   app.get("/api/maintenance_logs", function(req, res) {
//     db.maintenance_logs.findAll({}).then(function(dbmaintenance) {
//       res.json(dbmaintenance);
//     });
//   });

//   app.get("/api/maintenance_logs/unit_id:unit_id", function(req, res) {
//     db.maintenance_logs
//       .findAll({ where: { unit_id: req.params.unit_id } })
//       .then(function(dbmaintenance) {
//         res.json(dbmaintenance);
//       });
//   });

//   // Create a new maintenance_logs
//   app.post("/api/maintenance_logs", function(req, res) {
//     db.maintenance_logs.create(req.body).then(function(dbmaintenance) {
//       res.json(dbmaintenance);
//     });
//   });

//   // Delete maintenance_logs by id
//   app.delete("/api/maintenance_logs/:logs_id", function(req, res) {
//     db.maintenance_logs
//       .destroy({ where: { logs_id: req.params.logs_id } })
//       .then(function(dbmaintenance) {
//         res.json(dbmaintenance);
//       });
//   });
// };
