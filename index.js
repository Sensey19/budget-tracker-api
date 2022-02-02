const express = require('express');
const currencies = require('./currencies');

const app = express();

app.get('/currencies', (req, res) => {
    res.json(currencies);
});

app.get('/', (req, res) => {
    res.send('Api is running.');
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running."));

