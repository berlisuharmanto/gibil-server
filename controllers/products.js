const Products = require("../models/Products");

const getsAllProductsStatic = async (req, res) => {
  const product = await Products.findById(req.params._id);

  if (product) {
    res.send({
      status: "success",
      message: "Product found",
      data: product,
    });
  } else {
    res.send({
      status: "warning",
      message: "Product not found",
    });
  }
};

const getsProduct = async (req, res) => {
  const product = await Products.findById(req.params._id);

  if (product) {
    res.send({
      status: "success",
      message: "Product found",
      data: product,
    });
  } else {
    res.send({
      status: "warning",
      message: "Product not found",
    });
  }
};

const getsAllProducts = async (req, res) => {
  const { name, price } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (price) {
    queryObject.price = { $regex: price, $options: "i" };
  }

  const products = await Products.find(queryObject);
  res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  const {
    name,
    price,
    numOfProducts,
    prodImage,
    prodBg,
    prodDesc,
    prodSpec,
    type,
  } = req.body;

  const newProduct = new Products({
    name,
    price,
    numOfProducts,
    prodImage,
    prodDesc,
    prodSpec,
    type,
  });

  await newProduct.save();
  return res.status(201).json({ msg: "masuk brah" });
};

const updateProduct = async (req, res) => {
  const {
    name,
    price,
    numOfProducts,
    prodImage,
    prodBg,
    prodDesc,
    prodSpec,
    type,
  } = req.body;

  const product = await Products.findByIdAndUpdate(
    req.params._id,
    {
      name,
      price,
      numOfProducts,
      prodImage,
      prodBg,
      prodDesc,
      prodSpec,
      type,
    },
    { new: true }
  );

  if (product) {
    res.send({
      status: "success",
      message: "Product updated",
      data: product,
    });
  } else {
    res.send({
      status: "warning",
      message: "Product not found",
    });
  }
};

const deleteProduct = async (req, res) => {
  const product = await Products.findByIdAndDelete(req.params._id);

  if (product) {
    res.send({
      status: "success",
      message: "Product deleted",
      data: product,
    });
  } else {
    res.send({
      status: "warning",
      message: "Product not found",
    });
  }
};

const buyProduct = async (req, res) => {
  const { prodId, quantity, numOfProducts } = req.body;

  const product = await Products.findByIdAndUpdate(
    prodId,
    {
      numOfProducts: numOfProducts - quantity,
    },
    { new: true }
  );

  if (product) {
    res.send({
      status: "success",
      message: "Product updated",
      data: product,
    });
  } else {
    res.send({
      status: "warning",
      message: "Product not found",
    });
  }
};

module.exports = {
  getsAllProducts,
  getsProduct,
  getsAllProductsStatic,
  createProduct,
  updateProduct,
  deleteProduct,
  buyProduct,
};
