const express = require('express');

const router = express.Router();
const Skincare = require("../model/skincare.model");

router.post("/", async (req, res) => {
    try {
        const skincare = await Skincare.create(req.body);
        return res.status(201).send(skincare)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const skincare = await Skincare.find({}).lean().exec();
        return res.status(201).send(skincare)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;