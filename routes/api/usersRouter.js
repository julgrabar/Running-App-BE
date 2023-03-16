const express = require("express");
const { getCurrentUser, addPassedTraining } = require("../../controllers");
const { ctrlWrapper, auth } = require("../../middleware");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrentUser));
router.patch("/current/:trainingId", auth, ctrlWrapper(addPassedTraining));

module.exports = router;
