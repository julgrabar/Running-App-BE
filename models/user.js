const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = Schema(
  {
    username: { type: String, required: true, minLength: 3, maxLength: 50 },
    password: {
      type: String,
      required: true,
      minLength: 8,
      validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/,
    },
    email: { type: String, required: true, validate: /.+@.+\..+/i },
    token: { type: String, default: null },
    passedWorkouts: [{ type: Schema.Types.ObjectId, ref: "training" }],
  },
  { versionKey: false }
);

userSchema.methods.setHashedPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePasswords = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.addTraining = function (trainingId) {
  if (!this.passedWorkouts.includes(trainingId)) {
    this.passedWorkouts.push(trainingId);
  }
};

const User = model("user", userSchema);

module.exports = User;
