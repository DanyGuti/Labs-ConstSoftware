// Esto es nuestro index.js
const express = require('express');
const app = express();
const homeModule = require("./routes/home");
const buyModule = require("./routes/buy");

// First module
app.use('/', homeModule);
// Second module
app.use('/buy', buyModule);


app.listen(3000);