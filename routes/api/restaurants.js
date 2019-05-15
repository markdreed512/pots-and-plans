const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

router
  .route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

module.exports = router;
