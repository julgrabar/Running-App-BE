const { Week } = require("../../models");

const getWeekById = async (req, res) => {
  const { weekId } = req.params;
  const user = req.user;
  const week = await Week.findById(weekId).populate("workouts");

  if (!week) {
    const err = new Error(`There is no week with id=${weekId}`);
    err.status = 404;
    res.status(404).send(err.message);
    return err;
  }

  if (user) {
    week.workouts = week.workouts.map((workout) => {
      workout.isPassed = user.passedWorkouts.includes(workout._id);
      return workout;
    });
  }

  res.json(week);
};

module.exports = getWeekById;
