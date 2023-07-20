const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  isAdmin: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", userSchema);
