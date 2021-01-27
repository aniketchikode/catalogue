const mongoose = require('mongoose');

const InvSchema = mongoose.Schema({
    productId: { type: String },
    stock: { type: Number },
    status: { type: Boolean },

}, {
    timestamps: true
});

module.exports = mongoose.model('inventry', InvSchema);
