const express = require('express');
const { createTicket } = require('../controllers/ticketController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createTicket);

module.exports = router;
