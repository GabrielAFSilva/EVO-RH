const connection = require('./connection');

const getLogin = async (adm) => {
    const {email, senha} = adm;
    const query = 'SELECT * FROM admins WHERE email = ? AND senha = ?';
    const [admin] = await connection.execute(query, [email, senha]);
    return admin;
};

module.exports = {
    getLogin
};
