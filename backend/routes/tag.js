const express = require("express");
const router = express.Router();
const { create, list, read, remove } = require("../controllers/tag");

const { runValidation } = require("../validators");
const { createTagVlidator } = require("../validators/tag");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

router.post(
  "/tag",
  createTagVlidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/tags", list);
router.get("/tag/:slug", read);
router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
