import express from "express";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
import connectDB from "./config/db.js";

import authRoutes from "./app/routes/authRoutes.js";
import customerRoutes from "./app/routes/customerRoutes.js";
import caseRoutes from "./app/routes/caseRoutes.js";



connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cases", caseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
