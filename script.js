
const inputField = document.getElementById('inputField')
const addButton = document.getElementById('addButton')
const listItem = document.getElementById('list')
const allButton = document.getElementById('allButton')
const activeButton = document.getElementById('activeButton')
const completeButton = document.getElementById('completeButton')
const clearButton = document.getElementById('clearButton')
const list = document.getElementById('list')
const section = document.getElementById('section')

var currentState = "all";

function clickButton() {
    addTodo()
}

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        addTodo();
    }
});

function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputField.value
    itemall.appendChild(item)

    if (inputField.value === '') return

    listItem.appendChild(itemall)
    inputField.value = ''

    itemall.addEventListener("dblclick", function () {
    itemall.contentEditable = true;
    itemall.focus();
      });
  
    const checkbutton = document.createElement("button")
    checkbutton.classList.add("fas", "fa-check");
    itemall.appendChild(checkbutton)


    const trashbutton = document.createElement("button")
    trashbutton.classList.add("fas", "fa-trash");
    itemall.appendChild(trashbutton)

}

function clickHandler(e){
    const item = e.target

    if(item.classList.contains('fa-check')){
        // check button is clicked
        if (item.classList[0] === 'fas') {
            const todolist = item.parentElement
            todolist.classList.toggle('checklist')
        }
    
    } else if (item.classList.contains('fa-trash')){
        // delete button is clicked
        if (item.classList[0] === 'fas') {
        const todolist = item.parentElement
        todolist.remove()
    }  

    }
}

listItem.addEventListener('click', clickHandler);

addButton.addEventListener('click', clickButton);


// function filterButton(e){
    
//   }


allButton.addEventListener('click', function(){
    currentState = "all";
    allButton.style.background ="green";
    addTodo()
});

activeButton.addEventListener('click', function(){
    currentState = "active";
    activeButton.style.background = "black";
    
})

completeButton.addEventListener('click', function(){
    currentState = "complete";
    completeButton.style.background = "blue";
})