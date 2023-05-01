const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear servidor
const app = express();

const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whiteList.some( dominio => dominio === origin);
        if(existe) {
            callback(null, true);
        } else {
            callback(new Error('No Permitido por CORS'));
        }
    }
}

// Habilitar cors
// app.use(cors(corsOptions));
app.use(cors());
// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// Habilitar el routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, ()=>{
    console.log('Servidor funcionando');
});