const express = require("express");
const router = express.Router();

// Middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");

// Contorllers
const {
  create,
  update,
  remove,
  list,
  read,
  productsByCategory,
} = require("../controllers/category");

router.post("/category", requireSignin, isAdmin, create);
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/categories", list);
router.get("/categories/:slug", read);
router.get("/products-by-category/:slug", productsByCategory);

module.exports = router;
