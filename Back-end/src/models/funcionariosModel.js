const connection = require('./connection');

const getAll = async () => {
    const [funcionario] = await connection.execute('SELECT * FROM funcionarios');
    return funcionario;
};

const cadastrarFuncionarios = async (funcionario) => {
    const {nome, dtNascimento, cpf, celular, cep, rua, bairro, numero, complemento, cidade, email} = funcionario;

    const query = 'INSERT INTO funcionarios(nome, dtNascimento, cpf, celular, cep, rua, bairro, numero, complemento, cidade, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [cadFuncionario] = await connection.execute(query, [nome, dtNascimento, cpf, celular, cep, rua, bairro, numero, complemento, cidade, email]);

    return {insertId: cadFuncionario.insertId};
};

const deleteFuncionarios = async (id) => {
    const [removedFuncionario] = await connection.execute('DELETE FROM funcionarios WHERE id = ?', [id]);
    return removedFuncionario;
};

const updateFuncionarios = async (id, funcionario) => {
    const {nome, dtNascimento, cpf, celular, cep, rua, bairro, numero, complemento, cidade, email} = funcionario;
    const query = 'UPDATE funcionarios SET nome = ?, dtNascimento = ?, cpf = ?, celular = ?, cep = ?, rua = ?, bairro = ?, numero = ?, complemento = ?, cidade = ?, email = ? WHERE id = ?';

    const [updateFuncionario] = await connection.execute(query, [nome, dtNascimento, cpf, celular, cep, rua, bairro, numero, complemento, cidade, email, id]);
    return updateFuncionario;
}

module.exports = {
    getAll,
    cadastrarFuncionarios,
    deleteFuncionarios,
    updateFuncionarios
};