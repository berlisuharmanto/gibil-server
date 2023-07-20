const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  numOfProducts: {
    type: Number,
    required: [true, "numOfProduct is required"],
  },
  prodImage: {
    type: String,
    required: [true, "prodImage is required"],
  },
  prodBg: {
    type: String,
  },
  prodDesc: {
    type: String,
    required: [true, "prodDesc is required"],
  },
  prodSpec: [
    {
      type: String,
      required: [true, "prodSpec is required"],
    },
  ],
  type: {
    type: String,
    required: [true, "type is required"],
  },
});

module.exports = mongoose.model("Products", productsSchema);
