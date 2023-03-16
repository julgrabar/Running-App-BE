const { User } = require("../../models");

const addPassedTraining = async (req, res) => {
  if (!req.user) {
    const err = new Error("Not authorized");
    err.status = 401;
    res.status(401).send(err.message);
    return err;
  }
  const { trainingId } = req.params;
  const user = await User.findById(req.user._id);
  user.addTraining(trainingId);
  await user.save();
  res.json(user);
};

module.exports = addPassedTraining;
