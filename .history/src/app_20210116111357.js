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
        res.send(InsertMen);
    } catch (error) {
        res.status(400).send(error)
    }
})
app.listen(port,( ) => {
    console.log(`Connection is live at Port No ${port}`);
})