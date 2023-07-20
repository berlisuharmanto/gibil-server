const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prodId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "prodId is required"],
  },
  prodName: {
    type: String,
    required: [true, "prodName is required"],
  },
  prodImage: {
    type: String,
    required: [true, "prodImage is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    default: 1,
    required: [true, "quantity is required"],
  },
});

module.exports = mongoose.model("Carts", cartSchema);
