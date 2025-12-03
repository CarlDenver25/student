const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Payment = require("../models/Payment");
const Review = require("../models/Review");
const Support = require("../models/Support");

// Bookings
/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - destinationId
 *         - userId
 *       properties:
 *         destinationId:
 *           type: string
 *         userId:
 *           type: string
 *         status:
 *           type: string
 *           description: Auto-generated (default "pending")
 *         createdAt:
 *           type: string
 *           description: Auto-generated timestamp
 *         updatedAt:
 *           type: string
 *           description: Auto-generated timestamp
 *       example:
 *         destinationId: "123"
 *         userId: "693082911448c07bde9c3812"
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created
 */
router.post("/bookings", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json({ message: "Booking created", booking });
});

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Booking retrieved
 */
router.get("/bookings/:id", async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  res.json(booking);
});

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       200:
 *         description: Booking updated
 */
router.put("/bookings/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  res.json({ message: "Booking updated", booking });
});

// Payments
/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - bookingId
 *         - amount
 *       properties:
 *         bookingId: { type: string }
 *         amount: { type: number }
 *         status: { type: string, description: "Auto-generated (pending)" }
 *         createdAt: { type: string, description: "Auto-generated" }
 *         updatedAt: { type: string, description: "Auto-generated" }
 *       example:
 *         bookingId: "64fa123abc"
 *         amount: 500
 */

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Payment created
 */
router.post("/payments", async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.status(201).json({ message: "Payment created", payment });
});

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Payment retrieved
 */
router.get("/payments/:id", async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  if (!payment) return res.status(404).json({ message: "Payment not found" });
  res.json(payment);
});

// Reviews
/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - destinationId
 *         - userId
 *         - comment
 *       properties:
 *         destinationId: { type: string }
 *         userId: { type: string }
 *         comment: { type: string }
 *         rating: { type: number, description: "Optional 1-5" }
 *         createdAt: { type: string, description: "Auto-generated" }
 *         updatedAt: { type: string, description: "Auto-generated" }
 *       example:
 *         destinationId: "123"
 *         userId: "693082911448c07bde9c3812"
 *         comment: "Amazing!"
 *         rating: 5
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: Review submitted
 */
router.post("/reviews", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json({ message: "Review submitted", review });
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Review retrieved
 */
router.get("/reviews/:id", async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) return res.status(404).json({ message: "Review not found" });
  res.json(review);
});

// Support
/**
 * @swagger
 * components:
 *   schemas:
 *     Support:
 *       type: object
 *       required:
 *         - userId
 *         - message
 *       properties:
 *         userId: { type: string }
 *         message: { type: string }
 *         status: { type: string, description: "Auto-generated (open)" }
 *         createdAt: { type: string, description: "Auto-generated" }
 *         updatedAt: { type: string, description: "Auto-generated" }
 *       example:
 *         userId: "693082911448c07bde9c3812"
 *         message: "Help needed"
 */

/**
 * @swagger
 * /api/support:
 *   post:
 *     summary: Create support ticket
 *     tags: [Support]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 *     responses:
 *       201:
 *         description: Ticket created
 */
router.post("/support", async (req, res) => {
  const ticket = new Support(req.body);
  await ticket.save();
  res.status(201).json({ message: "Support ticket created", ticket });
});

/**
 * @swagger
 * /api/support/{id}:
 *   get:
 *     summary: Get support ticket by ID
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Ticket retrieved
 */
router.get("/support/:id", async (req, res) => {
  const ticket = await Support.findById(req.params.id);
  if (!ticket) return res.status(404).json({ message: "Support ticket not found" });
  res.json(ticket);
});

module.exports = router;