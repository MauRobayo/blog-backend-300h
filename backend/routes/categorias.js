const express = require('express');
const Categoria = require('../models/Categoria');
const router = express.Router();

// Crear nueva categoría
router.post('/', async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la categoría', error });
  }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener las categorías', error });
  }
});

module.exports = router;
    