let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Local Storage Helpers
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks() {
  taskList.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach(task => {
    let taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    taskItem.id = task.id;
    if (task.completed) taskItem.classList.add('completed');
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteButton';
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  })
}

// Add Task
addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    tasks = getTasks();
    let newTask = {
      id: `taskItem-${Date.now()}`,
      text: taskInput.value,
      completed: false
    };
    tasks.push(newTask);
    setTasks(tasks);
    renderTasks();
    taskInput.value = "";
  }
});

// Initial Load
renderTasks();

// Complete or Delete Task
taskList.addEventListener("click", function (e) {
  let tasks = getTasks();
  if (e.target && e.target.nodeName === "LI") {
    // Toggle completed
    let id = e.target.id;
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(tasks);
    renderTasks();
  }else if (e.target && e.target.className === "deleteButton") {
    if(confirm('Are you sure you want to delete this task?')){
      let id = e.target.parentElement.id;
      tasks = tasks.filter(task => task.id !== id);
      setTasks(tasks);
      renderTasks();
    };
  }
});