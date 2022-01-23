const mongoose = require('mongoose');

const lipisricSchema = mongoose.Schema({
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

const Lipstic = mongoose.model("lipstic", lipisricSchema);
module.exports = Lipstic;