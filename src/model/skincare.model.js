const mongoose = require('mongoose');

const skinCareSchema = new mongoose.Schema({
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
    },
})


const Skincare = mongoose.model("skincare", skinCareSchema);
module.exports = Skincare;