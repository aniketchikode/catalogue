const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    userId: { type: String },
    productId: { type: String },
    quantity: { type: Number },

}, {
    timestamps: true
});

module.exports = mongoose.model('userorder', OrderSchema);
