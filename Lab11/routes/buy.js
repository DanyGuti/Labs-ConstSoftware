const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let router = express.Router();

router.get('/comprar', (req, res) => {
    res.sendFile(__dirname + '/comprar.html');
});

router.post('/carrito', (req, res) => {
    res.sendFile(__dirname + '/carrito.html');
    let data = req.body;
    let dataJSON = JSON.parse(JSON.stringify(data));
    console.log(dataJSON);
    console.log("hola");
    // let data = console.log(req.body);
    // let dataJSON = JSON.stringify(data);
    // let parse = JSON.parse(dataJSON);
    // console.log(parse);
    // if (dataJSON.length > 1) {
    //     let arr = JSON.parse(dataJSON);
    //     res.sendFile(__dirname + '/carrito.html');
    // }
    // try {
    //     arr = JSON.parse(dataJSON);
    // } catch(e){
    //     console.log('Message: ', e.message);
    // }
});


module.exports = router;