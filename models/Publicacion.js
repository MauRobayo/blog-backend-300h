const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  contenido: {
    type: String,
    required: true
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  },
  comentarios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comentario'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Publicacion', publicacionSchema);
