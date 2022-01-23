const mongoose = require('mongoose');

const hairCareSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const HairCare = mongoose.model("hairCare", hairCareSchema);
module.exports = HairCare;