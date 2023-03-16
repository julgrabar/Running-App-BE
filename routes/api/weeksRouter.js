const express = require("express");
const { getWeeks, getWeekById } = require("../../controllers");
const { ctrlWrapper, auth } = require("../../middleware");

const router = express.Router();

router.get("/", ctrlWrapper(getWeeks));

router.get("/:weekId", auth, ctrlWrapper(getWeekById));

module.exports = router;
