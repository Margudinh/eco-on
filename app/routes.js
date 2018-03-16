module.exports = function(app,con){
    app.get('/',function(req,res){
        res.sendFile(__dirname, "/public/index.html");
        
    });

    app.post("/login",function(req,res){
        var correo = req.param("correo");
        var password = req.param("password");

        
    })
   
}