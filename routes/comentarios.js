const express = require('express');
const Comentario = require('../models/Comentario');
const router = express.Router();

// Crear nuevo comentario
router.post('/', async (req, res) => {
  try {
    const nuevoComentario = new Comentario(req.body);
    await nuevoComentario.save();
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el comentario', error });
  }
});

// Obtener todos los comentarios de una publicación
router.get('/publicacion/:publicacionId', async (req, res) => {
  try {
    const comentarios = await Comentario.find({ publicacion: req.params.publicacionId }).populate('autor');
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener los comentarios', error });
  }
});

module.exports = router;
