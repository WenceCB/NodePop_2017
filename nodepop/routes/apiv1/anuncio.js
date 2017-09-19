"use strict";

const express = require('express');
const router = express.Router();

// Exportamos de mongoose el modelo de anuncio

const Anuncio = require('..//../models/Anuncio');

// GET de mi API /

router.get('/',(req,res,next)  => {
    
        const nombre = req.query.nombre;
        
    
        // Paginar
    
        const skip = parseInt(req.query.skip);
    
        // Limitar
    
        const limit = parseInt(req.query.limit);
        // Filtro
    
        const filter = {};
    
        if (nombre){
            filter.nombre = nombre;
        }
        
        // Recuperar una lista de anuncios
        Anuncio.lista(filter, skip, limit).then(lista => {
            res.json({succes: true, rows: lista});
        }).catch( err => {
                console.log('Error ',err);
                next(err); // Para que retorne la página de error
                return;        
        });
    });

    module.exports = router;