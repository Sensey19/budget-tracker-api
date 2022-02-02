const express = require('express');
const currencies = require('./currencies');

const app = express();
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

app.get('/currencies', (req, res) => {
    res.json(currencies);
});

app.get('/', (req, res) => {
    res.send('Api is running.');
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running."));

