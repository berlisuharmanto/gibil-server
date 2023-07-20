const express = require("express");
const router = express.Router();

const {
  getsAllCarts,
  addToCarts,
  deleteCarts,
  updateCarts,
  clearCarts,
} = require("../controllers/cart");

router.route("/").get(getsAllCarts);
router.route("/add").post(addToCarts);
router.route("/delete").delete(deleteCarts);
router.route("/clear").delete(clearCarts);
router.route("/update").put(updateCarts);

module.exports = router;
