const mongoose = require('mongoose');

// Criando um esquema de usuário para inserir no banco
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,

})

// Criando o Modelo de uauário que sera inserido no banco
const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel;