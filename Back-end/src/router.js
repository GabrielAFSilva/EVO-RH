const express = require('express');
const funcionariosController = require('./controllers/funcionariosController');
const funcionariosMiddleware = require('./middlewares/funcionariosMiddleware');

const router = express.Router();

router.get('/funcionarios', funcionariosController.getAll);
router.post('/funcionarios', funcionariosMiddleware.validateFunBody, funcionariosController.cadastrarFuncionarios);
router.delete('/funcionarios/:id', funcionariosController.deleteFuncionarios);
router.put('/funcionarios/:id', funcionariosMiddleware.validateFunBody,funcionariosController.updateFuncionarios);


module.exports = router;