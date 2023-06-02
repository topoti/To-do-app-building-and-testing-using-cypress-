const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const listItem = document.getElementById("list");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const completeButton = document.getElementById("completeButton");
const clearButton = document.getElementById("clearButton");

allButton.addEventListener("click", showAllTasks);
activeButton.addEventListener("click", showActiveTasks);
completeButton.addEventListener("click", showCompletedTasks);
clearButton.addEventListener("click", clearCompletedTasks);
addButton.addEventListener("click", addTodo);

const tasks = [];

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter"){
      addTodo();
  }
});

function todoElement(task, index) {
  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = task.text;
  if (task.completed) {
    item.classList.add("checklist");
  }
  itemall.appendChild(item);

  listItem.appendChild(itemall);

  const checkbutton = document.createElement("button");
  checkbutton.classList.add("fas", "fa-check");
  itemall.appendChild(checkbutton);

  const trashbutton = document.createElement("button");
  trashbutton.classList.add("fas", "fa-trash");
  itemall.appendChild(trashbutton);

  checkbutton.addEventListener("click", () => TaskCompletion(index));
  trashbutton.addEventListener("click", () => deleteTask(index));
}

function addTodo() {
    const task = {
      text: inputField.value,
      completed: false,
    };
  
    if (inputField.value === "") return;
  
    tasks.push(task);
    todoTasks();
    inputField.value = "";
  }

function todoTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    todoElement(task, index);
  });
}

function TaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  todoTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  todoTasks();
}


function showAllTasks() {
  todoTasks();
}

function showActiveTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    if (!task.completed) {
      todoElement(task, index);
    }
  });
}

function showCompletedTasks() {
  listItem.innerHTML = "";

  tasks.forEach((task, index) => {
    if (task.completed) {
      todoElement(task, index);
    }
  });
}

function clearCompletedTasks() {

    for(let i=0; i<tasks.length-1; i++) 
    {
    if (tasks[i].completed) {
      tasks.splice(i, 1);
    }
  }

  todoTasks();
}



