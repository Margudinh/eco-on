var express = require('express');
var mysql = require('mysql');
var db = require('./app/db');
var routes = require('./app/routes');

var app = express();
app.use(express.static('./public'));

var con = mysql.createConnection(db);
con.connect();



app.listen(8000);
console.log("Server iniciado en el puerto 8000");