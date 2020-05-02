'use strict'
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express();

app.set('view engine','ejs');
app.set('views','./app/views/');
//Configurando arquivos estaticos no express
app.use(express.static('./public'));

//Configuração Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://docker.for.mac.localhost:27017/internetMonitor');

//Configuração Consign
consign()
    .include('./app/routes')
    .then('./app/controller')
    .into(app);



module.exports = app;
