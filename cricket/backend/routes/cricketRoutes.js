import express from "express";

const router = express.Router();

// Example route for getting cricket data
router.get("/", (req, res) => {
  res.send("Cricket data");
});

// Add more routes as needed
// router.post("/some-endpoint", (req, res) => { ... });

export default router;