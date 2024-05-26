const express = require('express');
const router = express.Router();
const User = require('../models/User');
// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo ítem
router.post('/', async (req, res) => {
  const { Nombre, Apellido, mail } = req.body;
  try {
    const newUser = new User({ Nombre: Nombre, Apellido: Apellido, mail: mail });
    await newUser.save();
    res.json("Se insertó con éxito");
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});



// Actualizar un ítem por ID
router.put('/:id', (req, res) => {
  
});

// Eliminar un ítem por ID
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
