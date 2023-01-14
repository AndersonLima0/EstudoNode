//como Person exporta um objeto, na importação precisa de chaves
const { Person } = require("./person");

//require("./modules/path");
require("./modules/fs");
const person = new Person("Anderson");
