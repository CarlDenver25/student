const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    bookingId: { type: String },
    userId: { type: String, required: true },
    destinationId: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);