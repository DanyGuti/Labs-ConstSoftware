const express = require('express');

let router = express.Router();

router.get('/compra', (request, response, next) => {
    response.send('Respuesta de la ruta "/home/compra"');
});

module.exports = router;