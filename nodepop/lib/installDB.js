
//  Script para generar anuncios en la BD

const Anuncio = require('..//models/Anuncio');

const mongoose = require('mongoose');
const conn = mongoose.connection;



conn.on('error', (err) => {
    console.log('Error de conexión ', err);
    process.exit(1);
});

conn.once('open', () =>{
    console.log('Conectado a MongoDB');
})

conn.dropDatabase('prueba');



mongoose.connect('mongodb://localhost/prueba');