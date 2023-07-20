const Carts = require("../models/Carts");

const getsAllCarts = async (req, res) => {
  const carts = await Carts.find(req.query);
  res.status(200).json({ carts });
};

const addToCarts = async (req, res) => {
  const { userId, prodId, prodName, prodImage, price, quantity } = req.body;
  const newCart = new Carts({
    userId,
    prodId,
    prodName,
    prodImage,
    price,
    quantity,
  });

  await newCart.save();
  return res.status(201).json({ msg: "masuk brah" });
};

const updateCarts = async (req, res) => {
  const { userId, cartId, quantity } = req.body;
  const updatedCart = await Carts.findOneAndUpdate(
    { userId, _id: cartId },
    {
      quantity,
    },
    { new: true }
  );
  if (updatedCart) {
    return res.status(200).json({ updatedCart });
  }
  return res.status(404).json({ msg: "not found" });
};

const deleteCarts = async (req, res) => {
  const { cartId, userId } = req.body;
  const deletedCart = await Carts.findOneAndDelete({ userId, _id: cartId });
  if (deletedCart) {
    return res.status(200).json({ msg: `deleted ${deletedCart}` });
  }
  return res.status(404).json({ msg: "not found" });
};

const clearCarts = async (req, res) => {
  const { userId } = req.body;
  const deletedCart = await Carts.deleteMany({ userId });
  if (deletedCart) {
    return res.status(200).json({ msg: `deleted ${deletedCart}` });
  }
  return res.status(404).json({ msg: "not found" });
};

module.exports = {
  getsAllCarts,
  addToCarts,
  updateCarts,
  deleteCarts,
  clearCarts,
};
