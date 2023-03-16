const { User } = require("../../models");

const signupUser = async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const err = new Error("User with this email already exists");
    err.status = 409;
    throw err;
  }

  const newUser = new User({ username, email });
  newUser.setHashedPassword(password);
  await newUser.save();
  res.status(201).json({ email, username });
};

module.exports = signupUser;
