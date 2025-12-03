const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    subject: { type: String, },
    message: { type: String, required: true },
    status: { type: String, default: "open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Support", supportSchema);