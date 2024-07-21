
function addTask(){
    const addInput=document.getElementById("add");
    const nextTask=document.getElementById("taskList");
    if(addInput.value.trim()===""){
        alert("Please enter a task");
        return;
    }
    
    const newTask=document.createElement('div');
    newTask.className='row';
    newTask.innerHTML=`<div class="col-6">
    <input type="text" name="task" class="taskInput" value="${add.value}" readonly>
    </div>
    <div class="col-6">
    <button class="del" type="button" onclick="del(this)">DELETE</button>
    </div>`;
    nextTask.appendChild(newTask);
    add.value="";

}

function del(button){
    const newTask= button.parentElement.parentElement;
    newTask.remove();
}

