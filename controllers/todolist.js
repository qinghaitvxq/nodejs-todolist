function todolistCtrl(app) {

    var todoList=[{item:"学习nodejs"},{item:"素描"},{item:"整理房间"}];

    app.get("/",function (req,res) {
        res.render("todolist",{todos:todoList});
    });

}
module.exports=todolistCtrl;