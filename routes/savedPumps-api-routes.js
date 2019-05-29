const router = require("express").Router();
const savedPumpsController = require('../controllers/savedPumpsController');

router.route("/")
  .get(savedPumpsController.findAll)
  .post(savedPumpsController.post);

// Matches with "/api/books/:id"
// router
//   .route("/unit_id:unit_id")
//   .get(savedPumpsController.findById)
//   .put(savedPumpsController.update)
//   .delete(savedPumpsController.remove);

module.exports = router;

