var add=document.getElementById("add");
function addTask(){
    if(add==="" || add===null){
        alert("Please enter a task");
        return false;
    }
    else{
        document.getElementById("add").innerHTML;
    }
}

function del(){
    let del=document.getElementById("del");
    let btn=document.getElementById("del");
    del.remove();
    btn.remove();
}