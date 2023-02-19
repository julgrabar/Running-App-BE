const { Schema, model } = require("mongoose");

const trainingSchema = Schema({
  duration_title: { type: String, required: true },
  order: { type: Number, required: true, min: 1 },
  title: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },
  image: { type: String, default: "" },
  duration: { type: Number, required: true },
  repetitions_number: { type: Number, min: 1, required: true },
  has_warm_up: { type: Boolean, default: true },
  has_cool_down: { type: Boolean, default: true },
  week: { type: Schema.Types.ObjectId, ref: "Week" },
  exercises: [
    {
      id: { type: Number, required: true },
      order: { type: Number, required: true, min: 1 },
      duration: { type: Number, required: true, min: 10 },
      exercise_type: {
        title: { type: String },
        image: { type: String, default: "" },
      },
    },
  ],
});

const Training = model("Training", trainingSchema);

module.exports = { Training };
