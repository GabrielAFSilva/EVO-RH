const funcinariosModel = require('../models/funcionariosModel');

const getAll = async (_req, res) => {
    const funcinarios = await funcinariosModel.getAll();
    return res.status(200).json(funcinarios);
};

const cadastrarFuncionarios = async (req, res) => {
    const cadFuncionario = await funcinariosModel.cadastrarFuncionarios(req.body);
    return res.status(201).json(cadastrarFuncionarios);
};

const deleteFuncionarios = async (req, res) => {
    const {id} = req.params;
    await funcinariosModel.deleteFuncionarios(id);
    return res.status(204).json();
};

const updateFuncionarios = async (req, res) => {
    const {id} = req.params;

    await funcinariosModel.updateFuncionarios(id, req.body);
    return res.status(204).json();
}


module.exports = {
    getAll,
    cadastrarFuncionarios,
    deleteFuncionarios,
    updateFuncionarios
};