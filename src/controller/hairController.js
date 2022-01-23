const express = require('express');
const HairCare = require('../model/hairCare.model');
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const hair = await HairCare.create(req.body);
        return res.status(201).send(hair)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const hair = await HairCare.find({}).lean().exec();
        return res.status(201).send(hair)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;