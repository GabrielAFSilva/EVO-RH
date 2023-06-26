const express = require('express');
const funcionariosController = require('./controllers/funcionariosController');
const funcionariosMiddleware = require('./middlewares/funcionariosMiddleware');

const adminsController = require('./controllers/adminController');
const adminsMiddleware = require('./middlewares/adminsMiddleware');

const router = express.Router();

router.get('/funcionarios', funcionariosController.getAll);
router.post('/funcionarios', funcionariosMiddleware.validateFunBody, funcionariosController.cadastrarFuncionarios);
router.delete('/funcionarios/:id', funcionariosController.deleteFuncionarios);
router.put('/funcionarios/:id', funcionariosMiddleware.validateFunBody,funcionariosController.updateFuncionarios);

router.post('/login', adminsMiddleware.validateAdminBody,adminsController.getLogin);


module.exports = router;