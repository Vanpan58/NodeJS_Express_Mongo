const express = require('express');
const Curso = require('../models/curso_model');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.json('Respuesta a petición GET de CURSOS funcionando correctamenete...');
});


//Función asíncrona para crear cursos
async function crearCurso(body){
    let curso = new Curso({
        titulo      : body.titulo,
        descripcion : body.descripcion,
        alumnos    : body.alumnos,
        calificacion  : body.calificacion 
    });
    return awaitcurso.save();
}

//Endpoint de tipo POST para el recurso CURSOS
ruta.post('/', (req, res) => {
    let resultado = crearCurso(req.body);

    resultado.then(curso => {
        res.json({
            curso
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    })
});

module.exports = ruta;