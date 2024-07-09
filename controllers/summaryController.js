const Device = require("../models/Device");
const Ticket = require("../models/Tickets");

exports.summary = async (req, res) => {
  try {
    const devicesCount = await Device.countDocuments();
    const openTicketsCount = await Ticket.countDocuments({ status: "Open" });
    const completedTicketsCount = await Ticket.countDocuments({
      status: "Completed",
    });

    res.json({
      devicesCount,
      openTicketsCount,
      completedTicketsCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};