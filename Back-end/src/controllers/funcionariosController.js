const funcinariosModels = require('../models/funcionariosModel');

const getAll = async (req, res) => {
    const funcinarios = await funcinariosModels.getAll();

    return res.status(200).json(funcinarios);
};

module.exports = {
    getAll
};