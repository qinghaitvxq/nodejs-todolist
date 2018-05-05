var form=document.querySelector("#todoForm");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    var newItem=form.item.value;

    fetch("/todo",{
        method:"POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:"item="+newItem
    }).then(function (res) {
        console.log("请求成功");
        location.reload();
    });
})