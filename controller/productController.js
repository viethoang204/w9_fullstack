const products = require('../data/sampleData').products;

const getAllProducts = (req, res) => {
    const productList = products.map(product => ({ id: product.id, name: product.name }));
    res.json(productList);
};

const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json({ id: product.id, name: product.name, price: product.price });
    } else {
        res.status(404).send('Product not found');
    }
};

const createProduct = (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

module.exports = { getAllProducts, getProductById, createProduct };
