const { Schema, model } = require("mongoose");

const weekSchema = Schema({
  _id: { type: Schema.Types.ObjectId },
  image: { type: String, default: "" },
  title: {
    type: String,
    required: [true, "Week must have title"],
    minLength: 4,
    maxLength: 50,
  },
  order: { type: Number, min: 1, required: true },
  workouts: [{ type: Schema.Types.ObjectId, ref: "Training" }],
});

const Week = model("Week", weekSchema);

module.exports = { Week };
