const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.log(' Error al conectar a MongoDB', error));

// Rutas
const publicacionesRouter = require('./routes/publicaciones');
const categoriasRouter = require('./routes/categorias');
const comentariosRouter = require('./routes/comentarios');

// Usar las rutas
app.use('/api/publicaciones', publicacionesRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/comentarios', comentariosRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en ejecución en http://localhost:${PORT}`);
});
