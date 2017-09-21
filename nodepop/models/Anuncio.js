"use strict";

const mongoose = require('mongoose');

// Definir un esquema

const anuncioSchema = mongoose.Schema({
    name: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String] 
});



// Añadimos método estático

anuncioSchema.statics.lista = function (filter, skip, limit, callback){
   const query = Anuncio.find();
   query.skip(skip);
   query.limit(limit);   
   return query.exec(callback);
};

// Crear el modelo

const Anuncio = mongoose.model('Anuncio', anuncioSchema);



// No es necesario exportar el modelo ya que moongose lo conoce

module.exports = Anuncio;