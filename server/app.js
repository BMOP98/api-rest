// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middlewares
app.use(bodyParser.json());
app.use(cors());

// Servir archivos estáticos desde el directorio 'client'
app.use(express.static(path.join(__dirname, '../client')));

// Conectar a MongoDB
mongoose.connect('mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/');

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error de conexión a MongoDB: ${err.message}`);
});

// Importar las rutas
app.use('/clientes', require('./routes/clientes'));

// Ruta de fallback para servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto:${port}`);
});
