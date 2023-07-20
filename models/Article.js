const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "name is required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  img: [
    {
      type: String,
    },
  ],
  preview: {
    type: String,
  },
  article: {
    type: String,
  },
});

module.exports = mongoose.model("Article", articleSchema);
