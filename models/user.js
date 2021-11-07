const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: new Date(),
  },
});

userSchema.virtual("formatted_creation_date").get(function () {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return this.creation_date.toLocaleDateString("en-US", options);
});

module.exports = mongoose.model("User", userSchema);
