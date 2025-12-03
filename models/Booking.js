const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    destinationId: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, default: "pending" }, // optional field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);