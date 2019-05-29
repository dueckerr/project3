const router = require("express").Router();
const savedPumpsRoutes = require("./savedPumps-api-routes");
const partsRoutes = require("./parts-api-routes");
// const companyRoutes = require("./company-api-routes");
// const fleetsRoutes = require("./fleets-api-routes");
const MaintLogsRoutes = require("./maintenance_logs-api-routes");


// SavedPumps routes
router.use("/api/savedPumps", savedPumpsRoutes);

// Parts routes
router.use("/api/parts", partsRoutes);

// Fleets routes
// router.use("/fleets-api-routes", fleetsRoutes);

// Maintenance Logs routes
router.use("/api/maintenance_logs", MaintLogsRoutes);


module.exports = router;
