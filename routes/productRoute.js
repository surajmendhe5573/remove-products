const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/', async (req, res) => {
    try {
        const { name, description, price, displayOnHomePage } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }

        const product = new Product({
            name,
            description,
            price,
            displayOnHomePage: displayOnHomePage || false,
            status: 'active' // Initially set the status to 'active'
        });
        
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Restore a product
router.put('/:id/restore', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        product.status = 'active';
        if (req.body.displayOnHomePage !== undefined) {
            product.displayOnHomePage = req.body.displayOnHomePage;
        }
        
        await product.save();
        res.status(200).json({ message: 'Product restored successfully', product });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Edit a product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.displayOnHomePage = req.body.displayOnHomePage !== undefined ? req.body.displayOnHomePage : product.displayOnHomePage;
        
        await product.save();
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Delete a product permanently
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted permanently', productId: req.params.id });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
