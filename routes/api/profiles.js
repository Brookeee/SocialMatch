const router = require("express").Router();

const profilesController = require("../../controllers/profileController");

// Matches with "/api/profiles"
router.route("/").get(profilesController.findAll);

// Matches with "POST /api/profiles"
router.route("/").post(profilesController.create);

// Matches with "/api/profiles/:id"
router.route("/:id").get(profilesController.findById);

module.exports = router;
