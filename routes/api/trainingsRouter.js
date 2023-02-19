const express = require("express");
const { getTrainingById } = require("../../controllers");
const { ctrlWrapper } = require("../../middleware");

const router = express.Router();

router.get("/:trainingId", ctrlWrapper(getTrainingById));

module.exports = router;
