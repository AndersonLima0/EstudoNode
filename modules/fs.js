const fs = require("fs");
const path = require("path");

//Cria uma pasta
/* fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro ", error);
  }
  console.log("Pasta criada com sucesso");
}); */

//Cria um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro ", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

//Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Olá Andisu",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Conteudo adicionado ao arquivo");
  }
);

//ler arquivo
fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);
