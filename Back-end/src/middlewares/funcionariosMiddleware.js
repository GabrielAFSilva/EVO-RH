const validateFunBody = (req, res, next) => {
    const { body } = req;

    if (body.nome === undefined || body.dtNascimento === undefined || body.cpf === undefined ||
        body.celular === undefined || body.cep === undefined || body.rua === undefined ||
        body.bairro === undefined || body.numero === undefined || body.complemento === undefined || body.cidade === undefined ||
        body.email === undefined) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    if (body.nome === '' || body.dtNascimento === '' || body.cpf === '' ||
        body.celular === '' || body.cep === '' || body.rua === '' ||
        body.bairro === '' || body.complemento === '' || body.cidade === '' ||
        body.email === '') {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    next();
};

module.exports = {
    validateFunBody,
};