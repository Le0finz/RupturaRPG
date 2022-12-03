if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const route = require("./route");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require('express-flash');
const session = require('express-session');

const initializePassport = require('./passport-config')
initializePassport(passport, username => {
  return  users.find(user => user.username === username),
  id => users.find(user => user.id === id)
})

const app = express();

const users = []


app.set("views",path.resolve(__dirname,"public/views")); //pega os recursos da pasta views para exibição
app.use(route); //faz ele usar as rotas q eu* fiz
app.set("view engine","ejs"); //<- a engenharia utilizada é de ejs-> html com JS
app.listen(3001, ()=>console.log("http://localhost:3001")); //efetivamente starta o servidor e faz a requisição para essa porta
app.use(express.static("public/views"));
app.use(express.urlencoded({extended: false}));

app.post('/register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(users)
    
    req.body.username
})
app.post('/login',passport.authenticate('local,',{
    sucessRedirect: '/' , //precisa redirecionar para pagnas diferentes -perguntar pro davi
    failureRedirect: '/login',
    failureFlash: true
}))


app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())