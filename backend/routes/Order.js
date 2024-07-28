const express = require('express');
const router= express.Router();
const zod= require('zod');
const Order= require('../models/Order');

const productSchema= zod.object({
    name: zod.string().min(1, 'Product name is required'),
    description: zod.string().min(1, 'Product description is required'),
    price: zod.number().positive('Price must be a positive number'),
    category: zod.string().min(1, 'Product category is required'),
    stock: zod.number().int().nonnegative('Stock must be a non-negative integer'),
    imageUrl: zod.string().url('Invalid image URL'),
})
//CREATE ORDER
router.post('/', async (req, res) => {
    const { body } = req;
  
    try {
      // Validate request body
      productSchema.parse(body);
  
      const newProduct = new Product(body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Get All Products
  router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Update Product
  router.put('/:id', async (req, res) => {
    const { body } = req;
    try {
      // Validate request body
      productSchema.parse(body);
  
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      Object.assign(product, body);
      await product.save();
      res.json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Delete Product
  router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;

