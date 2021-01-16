const express = require('express');
const router = new express.Router();

const MensRanking = require('../models/mens');

// Handle POST Request
router.post('/mens', async(req, res) =>  {
    try {
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const InsertMen = await addingMensRecord.save();
        res.status(201).send(InsertMen);
    } catch (error) {
        res.status(400).send(error)
    }
});

// Handle GET Request
router.get('/mens', async(req, res) =>  {
    try {
        const getMens = await MensRanking.find({}).sort({'ranking':1})
        res.status(201).send(getMens);
    } catch (error) {
        res.status(400).send(error)
    }
});

// Handle GET Request of Indivisual
router.get('/mens/:id', async(req, res) =>  {
    try {
        const _id = req.params.id;
        console.log('ID = ',_id);
        const getMen = await MensRanking.findById(_id)
        res.status(201).send(getMen);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Handle PATCH Request of Indivisual
router.patch('/mens/:id', async(req, res) =>  {
    try {
        const _id = req.params.id;
        console.log('ID = ',_id);
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status.send(getMen);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Handle DELETE Request of Indivisual
router.delete('/mens/:id', async(req, res) =>  {
    try {
        const _id = req.params.id;
        console.log('ID = ',_id);
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
