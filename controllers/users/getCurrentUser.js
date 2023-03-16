const getCurrentUser = async (req, res) => {
  if (!req.user) {
    const err = new Error("Not authorized");
    err.status = 401;
    res.status(401).send(err.message);
    return err;
  }
  const { password, token, ...rest } = req.user._doc;
  res.send({ user: rest });
};

module.exports = getCurrentUser;
