// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  mail: String
});

module.exports = mongoose.model('User', userSchema);
