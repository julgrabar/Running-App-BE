const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization) {
    try {
      const [bearer, token] = authorization.split(" ");
      if (bearer !== "Bearer") {
        const err = new Error("Unauthorized");
        err.status = 401;
        throw err;
      }
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        const err = new Error("Unauthorized");
        err.status = 401;
        throw err;
      }
      req.user = user;
    } catch (error) {
      if (error.message === "Invalid signature") {
        error.status = 401;
      }
      next(error);
    }
  }
  next();
};

module.exports = auth;
