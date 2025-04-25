const express = require('express');
const Publicacion = require('../models/Publicacion');
const router = express.Router();

// Crear nueva publicación
router.post('/', async (req, res) => {
  try {
    const nuevaPublicacion = new Publicacion(req.body);
    await nuevaPublicacion.save();
    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la publicación', error });
  }
});

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const publicaciones = await Publicacion.find().populate('categoria autor comentarios');
    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener las publicaciones', error });
  }
});

// Obtener publicación por ID
router.get('/:id', async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id).populate('categoria autor comentarios');
    if (!publicacion) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json(publicacion);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener la publicación', error });
  }
});

module.exports = router;
