var express=require("express");
var controller=require("./controllers/todolist");

var app=express();

app.set("view engine","ejs");
app.use(express.static('public'));

controller(app);


app.listen(3000);
console.log("Server is listening to the port:3000");