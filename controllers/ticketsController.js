const Ticket = require("../models/Tickets");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addLog = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    ticket.logs.push(req.body);
    ticket.status = "Completed";
    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.completeTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    ticket.status = "Completed";
    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};