const express =  require("express");

var app =  express();

app.use(express.static('./'))


app.get("/",function(req,res){
    
    res.sendfile("./gears.html");
});
app.listen(80,function(){
    console.log("Servidor Listo");
    
});