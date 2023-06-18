const connection = require('./connection');

const getAll = async () => {
    const employees = await connection.execute('SELECT * FROM funcionarios');
    return employees;
};

module.exports = {
    getAll
};