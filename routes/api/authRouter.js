const express = require("express");
const { signupUser, signinUser } = require("../../controllers");
const { ctrlWrapper } = require("../../middleware");

const router = express.Router();

router.post("/signup", ctrlWrapper(signupUser));
router.post("/signin", ctrlWrapper(signinUser));

module.exports = router;
