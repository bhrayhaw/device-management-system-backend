const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  type: String,
  model: String,
  serialNumber: String,
  assignedUser: String,
  location: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Device", DeviceSchema);

