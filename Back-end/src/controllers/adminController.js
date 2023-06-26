const { json } = require('express');
const adminsModel = require('../models/adminModel');

const getLogin = async (req, res) => {
    const auth = await adminsModel.getLogin(req.body);
    console.log(auth.length);
    
    if (auth.length == 1) {
        return res.status(200).json({message: 'Usuário logado no sistema.'});
    }
    else {
        return res.status(400).json({message: 'Usuário negado.'});
    }
}

module.exports = {
    getLogin
};