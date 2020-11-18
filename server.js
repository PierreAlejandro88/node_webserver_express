const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
//Express HBS engine
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function(err) {

});

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'pierre'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});



app.listen(port, () => {
    console.log(`Escuchando peticiones  en el puerto ${port}`);
});