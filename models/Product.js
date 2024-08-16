const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
         type:String,
         required: true },
    description: {
         type: String 
        },
    price: { 
        type: Number, 
        required: true
     },
    displayOnHomePage: { 
        type: Boolean, 
        default: false 
    },
    status: { 
        type: String, 
        default: 'removed'      // 'active', 'removed'
    }, 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
