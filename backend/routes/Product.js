const express = require('express');
const router= express.Router();
const zod = require('zod');
const Product = require('../models/Product');

const productValidate= zod.object({
    name: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
    description: zod.string(),
    imageUrl: zod.string()
})
//CREATE PRODUCT
router.post('/',async(req, res) => {
    const exitingProduct = await Product.findOne({
        name: req.body.name
    })
    if(exitingProduct){
        return res.status(400).json({
            error: 'Product already exists in our store'
        })
        }
    const product= Product.create({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });
    res.json({
        message: 'Product created successfully',
        product: product
    });

    
})

//GET ALL PRODUCTS
router.get('/',async (req, res) => {
try{
        const products= await Product.find()
        res.json({
            products
        })
}catch(err){
        res.status(500).json({
            message: "server error",
        })
}
})
//GET single PRODUCT

router.get('/:id', async (req, res) => {
    try{
        const product= await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        res.json({
            product
        })
    }catch(err){
            return res.status(500).json({
                message: 'server error',
            });
    }
})

module.exports = router;