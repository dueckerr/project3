// require("dotenv").config();
var express = require("express");
var sequelize = require("sequelize")
var db = require("./models");
var mysql2 = require ("mysql2")

var app = express();
var PORT = process.env.PORT || 7000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Routes
// require("./routes/inventory-api-routes")(app);
require("./routes/maintenance_logs-api-routes")(app);
require("./routes/parts-api-routes")(app);
require("./routes/fleets-api-routes")(app);
require("./routes/company-api-routes")(app);
// require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
