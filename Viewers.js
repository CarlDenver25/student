const express = require("express");
const router = express.Router();

// ------------------ DESTINATIONS ------------------
router.get("/destinations", (req, res) => {
  res.json({ message: "List of all travel destinations" });
});

router.get("/destinations/:id", (req, res) => {
  res.json({ message: "Details of destination", id: req.params.id });
});

// ------------------ BOOKINGS ------------------
router.post("/bookings", (req, res) => {
  res.json({ message: "Booking created", body: req.body });
});

router.get("/bookings/:id", (req, res) => {
  res.json({ message: "Retrieve booking details", id: req.params.id });
});

router.put("/bookings/:id", (req, res) => {
  res.json({ message: "Booking updated", id: req.params.id, body: req.body });
});

router.delete("/bookings/:id", (req, res) => {
  res.json({ message: "Booking deleted", id: req.params.id });
});

// ------------------ USERS ------------------
router.post("/users", (req, res) => {
  res.json({ message: "User registered", body: req.body });
});

router.post("/users/login", (req, res) => {
  res.json({ message: "User logged in", body: req.body });
});

router.get("/users/:id/bookings", (req, res) => {
  res.json({ message: "Bookings for user", userId: req.params.id });
});

// ------------------ PAYMENTS ------------------
router.post("/payments", (req, res) => {
  res.json({ message: "Payment submitted", body: req.body });
});

router.get("/payments/:id", (req, res) => {
  res.json({ message: "Payment status", id: req.params.id });
});

// ------------------ REVIEWS ------------------
router.post("/reviews", (req, res) => {
  res.json({ message: "Review added", body: req.body });
});

router.get("/reviews/destination/:destinationId", (req, res) => {
  res.json({ message: "Reviews for destination", destId: req.params.destinationId });
});

// ------------------ OFFERS ------------------
router.get("/offers", (req, res) => {
  res.json({ message: "Current travel offers" });
});

// ------------------ SUPPORT ------------------
router.post("/support", (req, res) => {
  res.json({ message: "Support request submitted", body: req.body });
});

module.exports = router;