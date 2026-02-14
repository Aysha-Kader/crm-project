import express from "express";

import verifyToken
from "../middleware/authMiddleware.js";

import {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer
}
from "../controllers/customerController.js";

const router = express.Router();

router.post("/", verifyToken, createCustomer);

router.get("/", verifyToken, getCustomers);

router.put("/:id", verifyToken, updateCustomer);

router.delete("/:id", verifyToken, deleteCustomer);

export default router;
