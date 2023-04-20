const path = require('path');

// Printando o nome do arquivo atual
console.log(path.basename(__filename));

// Diretório atual
console.log(path.dirname(__filename));

// Extemsão do arquivo
console.log(path.extname(__filename));

// Criar o objeto path
console.log(path.parse(__filename));

// Juntar o caminho do arquivo
console.log(path.join(__dirname, 'teste'))