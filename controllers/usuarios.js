const express = require('express');
const Usuario = require('../models/usuario_model');
const Joi = require('@hapi/joi');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.json('Respuesta a peticón GET de USUARIOS fucionando correctamente...');
});



module.exports = ruta;