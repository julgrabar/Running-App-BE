const getWeekById = require("./weeks/getWeekById");
const getWeeks = require("./weeks/getWeeks");
const getTrainingById = require("./trainings/getTrainingById");
const signupUser = require("./auth/signup");
const signinUser = require("./auth/signin");
const getCurrentUser = require("./users/getCurrentUser");
const addPassedTraining = require("./users/addPassedTraining");

module.exports = {
  getWeeks,
  getWeekById,
  getTrainingById,
  signupUser,
  signinUser,
  getCurrentUser,
  addPassedTraining,
};
