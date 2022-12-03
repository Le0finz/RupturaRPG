const express = require("express");

// o ponto (.) volta uma pag no diretório (util para importações)
//importando a função homepage
const homeController = require("./controllers/homeController");
const sheetController = require("./controllers/sheetController");
const inventoryController = require("./controllers/inventoryController");
const registerController = require("./controllers/registerController.js");
const loginController = require("./controllers/loginController.js");

// Criei a rota
const route = express.Router();

//httpnaojsnoqn/ e a depois da virgula é a função que vai ser chamada
route.get('/',homeController.homepage);
route.get('/sheet',sheetController.sheet);
route.get('/inventory',inventoryController.inventory);
route.get('/register',registerController.register);
route.get('/login',loginController.login)

module.exports=route;
