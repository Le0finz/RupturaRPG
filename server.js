const route = require("./route");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("views",path.resolve(__dirname,"views")); //pega os recursos da pasta views para exibição
app.use(route); //faz ele usar as rotas q eu* fiz
app.set("view engine","ejs"); //<- a engenharia utilizada é de ejs-> html com JS
app.listen(3001, ()=>console.log("http://localhost:3001")); //efetivamente starta o servidor e faz a requisição para essa porta
