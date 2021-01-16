const express = require('express');
require('../db/conn');
const MensRanking = require('../models/mens')


const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Hello From The Home Side..!')
})

app.use(express.json());

// Handle POST Request
app.post('/mens', async(req, res) =>  {
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
app.get('/mens', async(req, res) =>  {
    try {
        const getMens = await MensRanking.find({})
        res.status(201).send(getMens);
    } catch (error) {
        res.status(400).send(error)
    }
});

// Handle GET Request of Indivisual
app.get('/mens/:id', async(req, res) =>  {
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
app.patch('/mens/:id', async(req, res) =>  {
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
app.delete('/mens/:id', async(req, res) =>  {
    try {
        const _id = req.params.id;
        console.log('ID = ',_id);
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status.send(getMen);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port,( ) => {
    console.log(`Connection is live at Port No ${port}`);
})