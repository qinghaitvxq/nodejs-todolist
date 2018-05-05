var bodyParser=require("body-parser");

var urlencodeParser=bodyParser.urlencoded({extended:false});

function todolistCtrl(app) {

    var todoList=[{item:"学习nodejs"},{item:"素描"},{item:"整理房间"}];

    app.get("/todo",function (req,res) {
        res.render("todolist",{todos:todoList});
    });

    app.post("/todo",urlencodeParser,function(req,res){
        var item=req.body;
        todoList.push(item);
        res.json(todoList);
    });
    app.delete("/todo",function (req,res) {

    });

}
module.exports=todolistCtrl;