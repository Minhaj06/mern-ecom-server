const express = require("express");
const router = express.Router();

// Middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");

// Controllers
const { register, login, updateProfile, secret } = require("../controllers/auth.js");

// Routes
router.post("/register", register);
router.post("/login", login);
router.get("/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});
router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
  res.json({ ok: true });
});

router.put("/profile", requireSignin, updateProfile);

// Testing Route
router.get("/secret", requireSignin, isAdmin, secret);

module.exports = router;
