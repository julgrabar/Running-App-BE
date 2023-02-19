const express = require("express");
const { getWeeks, getWeekById } = require("../../controllers");
const { ctrlWrapper } = require("../../middleware");

const router = express.Router();

router.get("/", ctrlWrapper(getWeeks));

router.get("/:weekId", ctrlWrapper(getWeekById));

module.exports = router;
