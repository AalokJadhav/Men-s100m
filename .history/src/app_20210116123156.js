const express = require('express');
require('./db/conn');
const MensRanking = require('../src/models/mens');
const router = require('./routers/men')

const app = express();

const port = process.env.PORT || 3000;

// app.get('/', async (req, res) => {
//     res.send('Hello From The Home Side..!')
// })

app.use(express.json());

app.use(router);

app.listen(port,( ) => {
    console.log(`Connection is live at Port No ${port}`);
})