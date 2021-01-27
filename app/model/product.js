const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name: { type: String },
    category: { type: String },
    price: { type: Number },
    status: { type: Boolean },

}, {
    timestamps: true
});

module.exports = mongoose.model('product', ProductSchema);
