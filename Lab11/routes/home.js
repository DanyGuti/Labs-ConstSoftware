const express = require('express');

let router = express.Router();

app.get('/home', (request, response, next) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/home/comprar', function (req, res, next) {
    res.sendFile(__dirname + '/comprar.html');
});

module.exports = router;