const mongoose = require('mongoose');

const productSchema= mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number
        , required: true
    },
    description: {
        type: String,
         required: true
        },
    quantity: {
        type: Number,
         required: true
        },
    imageUrl: {
        type: String,
         required: true
    
    }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
  })
const Product= mongoose.model('Product', productSchema);

module.exports=Product;