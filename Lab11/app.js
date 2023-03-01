const express = require('express');
const app = express();
// const myRoutes = require('./Lab11/routes/home');
// app.use(bodyParser.json());

app.use("/", (request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/home', myRoutes);


//Middleware

// App.use no distingue entre POST y GET
// Es por esto que existe el método app.get() y app.post()
app.use("/", (request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);