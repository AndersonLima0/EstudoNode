//chamando o modulo
const http = require("http");

//porta do servidor
const port = 8080;

//criando o servidor
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Anderson",
        email: "and@gmail.com",
      },
      {
        name: "Amongus",
        email: "amongus@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});
server.listen(port, () => console.log(`Rodando na porta ${port}!`));
