
const inputField = document.getElementById('inputField')
const addButton = document.getElementById('addButton')
const listItem = document.getElementById('list')

function clickButton() {
    addTodo()
}

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

    const trashbutton = document.createElement("button")
    trashbutton.classList.add("fas", "fa-trash");
    itemall.appendChild(trashbutton)
}

function del(){
    if(item.classList[0] =='trashbutton'){
        const listItem = item.parentElement
        listItem.remove()
    }
}

listItem.addEventListener('click', del);

addButton.addEventListener('click', clickButton);