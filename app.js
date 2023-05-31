
var list = [];

var input= document.getElementById('inputField');
var todolist = document.getElementById('list');

document.getElementById('addButton').addEventListener('click', function(){
    list.push(input.value)
    input.value= "";
    showList()

})
function showList(){
    const itemall = document.createElement('div')
    todolist.innerHTML = ""
   
    list.forEach(function(n){

        todolist.innerHTML += "<li>" + n + "</li>";

        const trashbutton = document.createElement("button")
        trashbutton.classList.add("fas", "fa-trash");
        todolist.appendChild(trashbutton)
        
    })
}

function del(){
    if(todolist.classList[0] =='trashbutton'){
        const listItem = todolist.parentElement
        listItem.remove()
    }
}

todolist.addEventListener('click', del);
