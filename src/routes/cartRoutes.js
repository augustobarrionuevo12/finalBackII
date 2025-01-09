const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getCart);
router.post('/', verifyToken, addToCart);
router.delete('/:productId', verifyToken, removeFromCart);

module.exports = router;
