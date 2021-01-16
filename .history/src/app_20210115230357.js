const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello From The Home Side..!')
})
app.listen(port,( ) => {
    console.log(`Connection is live at Port No${port}`);
})