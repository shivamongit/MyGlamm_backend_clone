const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    lipstic_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "lipstic",
        required: true
    }],
    hairCare_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hairCare",
        required: true
    }],
    skincare_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skincare",
        required: true
    }]
})

module.exports = mongoose.model("product", productSchema)