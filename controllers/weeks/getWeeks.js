const { Week } = require("../../models");

const getWeeks = async (req, res) => {
  const weeks = await Week.find({}).sort({ order: 1 });
  res.json(weeks);
};

module.exports = getWeeks;
