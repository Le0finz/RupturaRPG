const express = require("express");

// o ponto (.) volta uma pag no diretório (util para importações)
//importando a função homepage
const homeController = require("./controllers/homeController");
const sheetController = require("./controllers/sheetController");

// Criei a rota
const route = express.Router();

//httpnaojsnoqn/ e a depois da virgula é a função que vai ser chamada
route.get('/',homeController.homepage);
route.get('/sheet',sheetController.sheet);


module.exports=route;
