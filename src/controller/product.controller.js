const express = require('express');

const router = express.Router();
const Product = require("../model/product.model");

router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const product = await Product.find({}).populate("lipstic_id").populate("hairCare_id").populate("skincare_id").lean().exec();
        return res.status(201).send(product)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;