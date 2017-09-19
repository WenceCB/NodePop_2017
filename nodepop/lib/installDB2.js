
//  Script para generar anuncios en la BD

"use strict";

const mongoose = require('mongoose');

const conn = mongoose.connection;



console.log("*** Iniciando Script ***");
// Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
mongoose.connect('mongodb://localhost/nodepop');
//Nombre de la base de datos que vamos a utilizar
conn.getDB("nodepop");

/*Limpiamos la base de datos por si existia algo antes*/
conn.dropDatabase();


/*coleciones de nuestro modelo de datos*/
conn.createCollection("anuncios");


/* Anuncios */
console.log("*********** Creando Anuncios *********");

const  mis_anuncios =
{
    "anuncios":[
        {
            "nombre": "Bicicleta",
            "venta": "true",
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": ["lifestyle", "motor"]
        },
        {
            "nombre": "Iphone 3GS",
            "venta": "false",
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": ["lifestyle", "mobile"]
        }
    ]
}

console.log("*********** Anuncios Guardados *********");
conn.anuncios.save(mis_anuncios);



console.log(" *** Fin del Script ***");


// Definir un esquema

var mis_anuncios = new Anuncio({
    "anuncios":[
        {
            "nombre": "Wence",
            "venta": "true",
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": ["lifestyle", "motor"]
        },
        {
            "nombre": "SAMNSUNG 3GS",
            "venta": "false",
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": ["lifestyle", "mobile"]
        }
    ]
}) ;


// Save the new model instance, passing a callback
mis_anuncios.save(function (err) {
    if (err) return handleError(err);
   console.log("Guardado en la BD");
  });