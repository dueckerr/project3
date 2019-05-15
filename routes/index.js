const router = require("express").Router();
// const inventoryRoutes = require("./inventory");
// const partsRoutes = require("./parts-api-routes");
// const companyRoutes = require("./company-api-routes");
// const fleetsRoutes = require("./fleets-api-routes");
const MaintLogsRoutes = require("./maintenance_logs-api-routes");


// Inventory routes
// router.use("/inventory", inventoryRoutes);
// Parts routes
// router.use("/parts-api-routes", partsRoutes);
// Company routes
// router.use("/company-api-routes", companyRoutes);
// Fleets routes
// router.use("/fleets-api-routes", fleetsRoutes);
// Maintenance Logs routes
router.use("/api/maintenance_logs", MaintLogsRoutes);


module.exports = router;
