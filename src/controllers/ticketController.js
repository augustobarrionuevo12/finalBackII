const Ticket = require('../models/Ticket');

const createTicket = async (req, res) => {
  try {
    const { items, total } = req.body;
    const ticket = await Ticket.create({ userId: req.user.id, items, total });
    res.status(201).json({ message: 'Ticket creado', ticket });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTicket };
