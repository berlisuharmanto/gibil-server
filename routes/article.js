const express = require("express");
const router = express.Router();

const {
  getsAllArticle,
  getsArticle,
  createArticle,
  editArticle,
  deleteArticle,
} = require("../controllers/article");

router.route("/").get(getsAllArticle);
router.route("/:_id").get(getsArticle);
router.route("/edit/:_id").put(editArticle);
router.route("/delete/:_id").delete(deleteArticle);
router.route("/").post(createArticle);

module.exports = router;
