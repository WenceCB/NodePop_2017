"use strict";

const express = require('express');
const router = express.Router();

// Forma 1 : Le pedimos a moongose que nos de el modelo de Agente
// const mongoose = require('mongoose');
// const Agente = moogoose.model('Agente');

// Forma 2 exportamos
const Anuncio = require('..//../models/Anuncio');


// Construcción de rutas para imágenes

const ruta = '/images/anuncios/';

// GET de mi API /

router.get('/',(req,res,next)  => {

    const name = req.query.name;
    const venta = req.query.venta;

    // Paginar

    const skip = parseInt(req.query.skip);

    // Limitar

    
    const limit = parseInt(req.query.limit);
    // Filtro

    const filter = {};

    if (name){
        filter.name = name;
    }
    if (venta){
        filter.venta = venta;
    }
    // Recuperar una lista de agentes
    Anuncio.lista(filter, skip, limit).then(lista => {
        //res.json({succes: true, rows: lista});
        res.render('anuncios',{lista,ruta});
    }).catch( err => {
            console.log('Error ',err);
            next(err); // Para que retorne la página de error
            return;        
    });
});

// GET /:id
// Recuperar un solo documento

router.get('/:id',(req,res,next)  => {
    const _id = req.params.id;
    // Recuperar una lista de agentes
    Anuncio.findOne({_id:_id},(err, anuncio) => {
        if(err){
            console.log('Error ',err);
            next(err); // Para que retorne la página de error
            return;
        }
        res.json({succes: true, row: anuncio});
    });
});


// POST /
// Crear un agente

router.post('/',(req,res, next) =>{
    console.log(req.body);
    // Creamos nuevo agente

    const anuncio = new Anuncio(req.body);

    // Lo guardamos en la base de datos

    anuncio.save((err,anuncioGuardado) =>{
        if(err){
            console.log('Error ',err);
            next(err); // Para que retorne la página de error
            return;
        }
        res.json({succes: true, resultado: anuncioGuardado});
    });   
});

// PUT /
// Actualizar un anuncio

router.put('/:claveAnuncio', (req,res,next) => {
    const _id = req.params.claveAnuncio;
    // Actualizo con {new: true} para que retorne el agenteActualizado y no el anterior
    Anuncio.findOneAndUpdate({_id: _id}, req.body, {new: true},(err, anuncioActualizado) =>{
        if(err){
            console.log('Error ',err);
            next(err); // Para que retorne la página de error
            return;
        }
        res.json({succes: true, resultado: anuncioActualizado});
    });
});

// DELETE /
// Borrar un anuncio

router.delete('/:id', (req,res,next) =>{
    const _id = req.params.id;
    Anuncio.remove({_id: _id}, (err)=>{
        if(err){
            console.log('Error ',err);
            next(err); // Para que retorne la página de error
            return;
        }
        res.json({succes: true, resultado: 'Se ha borrado'});
    });
})

module.exports = router;