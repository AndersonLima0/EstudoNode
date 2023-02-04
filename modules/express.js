const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello world</h1>");
});

/* app.get("/users", (req, res) => {
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

  res.status(200).json(users);
}); */

//cria usuario no postman
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Listagem de usuarios
app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
//Listagem de usuario por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
//editar usuario nesse caso o campo emmail
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
