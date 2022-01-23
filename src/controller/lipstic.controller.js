const express = require('express');

const router = express.Router();
const Lipstic = require("../model/lipstic.model");

router.post("/", async (req, res) => {
    try {
        const lipstic = await Lipstic.create(req.body);
        return res.status(201).send(lipstic)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const lipstic = await Lipstic.find({}).lean().exec();
        return res.status(201).send(lipstic)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;