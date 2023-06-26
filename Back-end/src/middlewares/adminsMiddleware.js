const validateAdminBody = (req, res, next) => {
    const { body } = req;

    if (body.email === undefined || body.senha === undefined || body.email === '' || body.senha === '') {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    next();
};

module.exports = {
    validateAdminBody
};