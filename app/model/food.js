const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    food_name: { type: String },
    category: { type: String },
    price: { type: Number },
    status: { type: Boolean },

}, {
    timestamps: true
});

module.exports = mongoose.model('food', FoodSchema);
