const path = require("path");

// Mostra apenas o nome do arquivo atual, no caso path.js
console.log(path.basename(__filename));

// Mostra nome do diretorio
console.log(path.dirname(__filename));

//Mostra a extensão do arquivo
console.log(path.extname(__filename));

//Cria objeto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
