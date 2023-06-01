
// var list = [];

// var input= document.getElementById('inputField');
// var todolist = document.getElementById('list');

// document.getElementById('addButton').addEventListener('click', function(){
//     list.push(input.value)
//     input.value= "";
//     showList()

// })
// function showList(){
//     const itemall = document.createElement('div')
//     todolist.innerHTML = ""
   
//     list.forEach(function(n){

//         todolist.innerHTML += "<li>" + n + "</li>";

//         const trashbutton = document.createElement("button")
//         trashbutton.classList.add("fas", "fa-trash");
//         todolist.appendChild(trashbutton)
        
//     })
// }

// function del(){
//     if(todolist.classList[0] =='trashbutton'){
//         const listItem = todolist.parentElement
//         listItem.remove()
//     }
// }

// todolist.addEventListener('click', del);


const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const listItem = document.getElementById("list");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const completeButton = document.getElementById("completeButton");
const clearButton = document.getElementById("clearButton");

allButton.addEventListener("click", addTodo);
allButton.addEventListener("click", showAllTasks);
activeButton.addEventListener("click", showActiveTasks);
completeButton.addEventListener("click", showCompletedTasks);
clearButton.addEventListener("click", clearCompletedTasks);
addButton.addEventListener("click", addTodo);


const tasks = [];

function addTodo() {
  const task = {
    text: inputField.value,
    completed: false,
  };

  if (inputField.value === "") return;

  tasks.push(task);
  renderTasks();
  inputField.value = "";
}

function renderTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    const itemall = document.createElement("div");
    itemall.classList.add("itemall");

    const item = document.createElement("p");
    item.classList.add("item");
    item.innerText = task.text;
    itemall.appendChild(item);

    listItem.appendChild(itemall);

    const checkbutton = document.createElement("button");
    checkbutton.classList.add("fas", "fa-check");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.classList.add("fas", "fa-trash");
    itemall.appendChild(trashbutton);

    if (task.completed) {
      itemall.classList.add("checklist");
    }

    checkbutton.addEventListener("click", () => toggleTaskCompletion(index));
    trashbutton.addEventListener("click", () => deleteTask(index));
  });
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

allButton.addEventListener("click", showAllTasks);
activeButton.addEventListener("click", showActiveTasks);
completeButton.addEventListener("click", showCompletedTasks);
clearButton.addEventListener("click", clearCompletedTasks);

function showAllTasks() {
  renderTasks();
}

function showActiveTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    if (!task.completed) {
      const itemall = document.createElement("div");
      itemall.classList.add("itemall");

      const item = document.createElement("p");
      item.classList.add("item");
      item.innerText = task.text;
      itemall.appendChild(item);

      listItem.appendChild(itemall);

      const checkbutton = document.createElement("button");
      checkbutton.classList.add("fas", "fa-check");
      itemall.appendChild(checkbutton);

      const trashbutton = document.createElement("button");
      trashbutton.classList.add("fas", "fa-trash");
      itemall.appendChild(trashbutton);

      checkbutton.addEventListener("click", () => toggleTaskCompletion(index));
      trashbutton.addEventListener("click", () => deleteTask(index));
    }
  });
}

function showCompletedTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    if (task.completed) {
      const itemall = document.createElement("div");
      itemall.classList.add("itemall");

      const item = document.createElement("p");
      item.classList.add("item");
      item.innerText = task.text;
      itemall.appendChild(item);

      listItem.appendChild(itemall);

      const checkbutton = document.createElement("button");
      checkbutton.classList.add("fas", "fa-check");
      itemall.appendChild(checkbutton);

      const trashbutton = document.createElement("button");
      trashbutton.classList.add("fas", "fa-trash");
      itemall.appendChild(trashbutton);

      checkbutton.addEventListener("click", () => toggleTaskCompletion(index));
      trashbutton.addEventListener("click", () => deleteTask(index));
    }
  });
}

function clearCompletedTasks() {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].completed) {
      tasks.splice(i, 1);
    }
  }

  renderTasks();
}