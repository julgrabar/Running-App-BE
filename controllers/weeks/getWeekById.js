const { Week } = require("../../models");

const getWeekById = async (req, res) => {
  const { weekId } = req.params;
  const week = await Week.findById(weekId).populate("workouts");

  if (!week) {
    const err = new Error();
    err.status = 404;
    err.message = `There is no contact with id=${weekId}`;
    res.status(404).send(err.message);
    return err;
  }

  res.json(week);
};

module.exports = getWeekById;
