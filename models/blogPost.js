const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: new Date(),
  },
});

blogPostSchema.virtual("formatted_creation_date").get(function () {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return this.creation_date.toLocaleDateString("en-US", options);
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
