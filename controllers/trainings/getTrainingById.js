const { Training } = require("../../models");

const getTrainingById = async (req, res) => {
  const { trainingId } = req.params;
  const training = await Training.findById(trainingId);
  if (!training) {
    const err = new Error();
    err.status = 404;
    err.message = `There is no training with id-${trainingId}`;
    res.status(404).send(err.message);
    return err;
  }
  res.send(training);
};

module.exports = getTrainingById;
