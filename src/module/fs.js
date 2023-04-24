const fs = require('fs');
const path = require('path');

// Criar pasta
fs.mkdir(
    path.join(__dirname, '/teste'), 
    (error) => {
        if (error) {
            return console.log(error)
        } else {
            console.log("created")
        }
})

// Criar um arquivo dentro dessa pasta
fs.writeFile(
    path.join(__dirname, '/teste', 'test.txt'), 
    'Hello World', 
    (error) => {
        if (error) {
            return console.log(error)
        } else {
            console.log('File created')
        }
})

// Append file
fs.appendFile(
    path.join(__dirname, '/teste', 'test.txt'), 
    'Hello Node!', 
    (error) => {
        if (error) {
            return console.log(error)
        } else {
            console.log('Successfull appended')
        }
})

// Ler Arquivo
fs.readFile(
    path.join(__dirname, '/teste', 'test.txt'), 
    'utf-8', 
    (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            console.log(data);
        }
})