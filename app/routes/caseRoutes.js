import express from "express";

import verifyToken
from "../middleware/authMiddleware.js";

import {
  createCase,
  getCases,
  updateCase
}
from "../controllers/caseController.js";

const router = express.Router();

router.post("/", verifyToken, createCase);

router.get("/", verifyToken, getCases);

router.put("/:id", verifyToken, updateCase);

export default router;
