import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
import userRoutes from "./routes/userRoutes.js";
import cricketRoutes from "./routes/cricketRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const db = new Client({
  connectionString: process.env.DATABASE_URL,
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

// Make the db client available globally
app.locals.db = db;

// Routes
app.use("/api/users", userRoutes);
app.use("/api/cricket", cricketRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
