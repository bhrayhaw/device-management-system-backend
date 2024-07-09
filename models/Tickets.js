const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
  issue: String,
  status: { type: String, default: "Open" },
  priority: String,
  assignedTo: String,
  logs: [
    {
      date: { type: Date, default: Date.now },
      description: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", TicketSchema);
