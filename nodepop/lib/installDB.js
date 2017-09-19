"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;
mongoose.connect('mongodb://localhost/prueba2');


// Definir un esquema

const Anuncio = require('..//models/Anuncio');

// Cargo los datos

const datos = require('../lib/datos');



  const mi_anuncio = new Anuncio ({
    "nombre": "Wenceslaooooooooooooooooo",
    "venta": "true",
    "precio": 230.15,
    "foto": "bici.jpg",
    "tags": ["lifestyle", "motor"]
}); 
 
mi_anuncio.save(function (err) {
    if (err) return handleError(err);
    console.log("Guardado");
  })





conn.once('open', () =>{
    console.log('Conectado a MongoDB');
    
});




