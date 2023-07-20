const express = require("express");
const router = express.Router();

const {
  getsAllProducts,
  getsProduct,
  getsAllProductsStatic,
  createProduct,
  updateProduct,
  deleteProduct,
  buyProduct,
} = require("../controllers/products");

router.route("/").get(getsAllProducts);
router.route("/:_id").get(getsProduct);
router.route("/:static").get(getsAllProductsStatic);
router.route("/update/:_id").put(updateProduct);
router.route("/delete/:_id").delete(deleteProduct);
router.route("/buy").put(buyProduct);
router.route("/").post(createProduct);

module.exports = router;
