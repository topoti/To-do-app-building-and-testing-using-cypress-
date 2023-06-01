
const inputField = document.getElementById('inputField')
const addButton = document.getElementById('addButton')
const listItem = document.getElementById('list')
const allButton = document.getElementById('allButton')

function clickButton() {
    addTodo()
}

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        addTodo();
    }
});

allButton.addEventListener('click', addTodo);

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

for (let i = 0; i < updatedList.length; i++) {
    if (updatedList[i].id == listItem.id) {
      updatedList.splice(updatedList.indexOf(updatedList[i]), 1);
    }
    console.log(updatedList);
  }


  for( let i=0; i< itemall.length; i++){
    if(itemall[i].id == listItem.id){
        itemall[i].splice(itemall.indexOf(itemall[i]),1);
    }
    console.log(itemall);
  }