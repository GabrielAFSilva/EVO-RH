const express = require('express');
const funcionariosController = require('./controllers/funcionariosController');

const router = express.Router();

router.get('/funcionarios', funcionariosController.getAll);

module.exports = router;