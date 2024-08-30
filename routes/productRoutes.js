const express = require('express');
const { getAllProducts, getProductById, createProduct } = require('../controller/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);

module.exports = router;
