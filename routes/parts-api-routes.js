const router = require("express").Router();
const partsController = require("../controllers/partsController");

// Matches with "/api/books"
router.route("/")
  .get(partsController.findAll)
  .post(partsController.post)

  router.route("/edit")
  .put(partsController.put)
  .get(partsController.findAll)

  // .put(partsController.update)
  

// // Matches with "/api/books/:id"
// // router
//   // .route("/:id")
//   // .get(partsController.findById)s
//   // .put(partsController.update)
//   // .delete(partsController.remove);

module.exports = router;
