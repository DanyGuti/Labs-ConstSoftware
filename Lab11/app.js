const express = require('express');
const app = express();
const myRoutes = require('./routes/home');
app.use('/home', myRoutes);

//Middleware
app.use("/", (request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// App.use no distingue entre POST y GET
// Es por esto que existe el método app.get() y app.post()
app.use("/", (request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);