var express = require('express');
var mysql = require('mysql');

var app = express();


app.get('/',function(req,res){

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'sakila'
    });

    con.connect();

    con.query("SELECT 1+1 AS solution, 2+2 AS othersolution", function(error, results,fields){
        if(error){
            throw error;
        }
        console.log(results);
        res.json(results);
    });
});

app.listen(8000);