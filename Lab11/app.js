const express = require('express');
const app = express();
const myRoutes = require('./routes/home');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/comprar', function (req, res) {
    res.sendFile(__dirname + '/comprar.html');
});
app.use('/home', myRoutes);

//Middleware

// App.use no distingue entre POST y GET
// Es por esto que existe el método app.get() y app.post()
app.use("/", (request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);