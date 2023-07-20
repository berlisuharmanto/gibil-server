const express = require("express");
const router = express.Router();
const {
  login,
  dashboard,
  register,
  registerAdmin,
  getUser,
  updateUser,
} = require("../controllers/user");

const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/registerAdmin").post(registerAdmin);
router.route("/user/:_id").get(getUser);
router.route("/edit").put(updateUser);

module.exports = router;
