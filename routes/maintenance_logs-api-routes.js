const router = require("express").Router();
const MaintlogsController = require('../controllers/maintlogsController');

router.route("/")
  .get(MaintlogsController.findAll)
  .post(MaintlogsController.post);


// Matches with "/api/books/:id"
// router
//   .route("/unit_id:unit_id")
//   .get(MaintlogsController.findById)
//   .put(MaintlogsController.update)
//   .delete(MaintlogsController.remove);

module.exports = router;


