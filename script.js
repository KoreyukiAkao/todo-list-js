let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Get all tasks from local storage
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

// Save all tasks to local storage
function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show all tasks on the page
function renderTasks() {
  taskList.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach((task) => {
    let taskItem = document.createElement("li");
    taskItem.textContent = task.text;
    taskItem.id = task.id;
    if (task.completed) taskItem.classList.add("completed");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

// Add a new task when the button is clicked
function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }
  let tasks = getTasks();
  let newTask = {
    id: `taskItem-${Date.now()}`,
    text: taskInput.value,
    completed: false,
  };
  tasks.push(newTask);
  setTasks(tasks);
  renderTasks();
  taskInput.value = "";
}

// Mark a task as done or not done
function toggleTaskCompleted(id) {
  let tasks = getTasks();
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
  setTasks(tasks);
  renderTasks();
}

// Delete a task by its id
function deleteTask(id) {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.id !== id);
  setTasks(tasks);
  renderTasks();
}

// Handle clicks on the task list (toggle or delete)
function handleTaskListClick(e) {
  // If a task (li) is clicked, toggle its completed state
  if (e.target && e.target.nodeName === "LI") {
    toggleTaskCompleted(e.target.id);
    // If the delete button is clicked, confirm and delete the task
  } else if (e.target && e.target.className === "deleteButton") {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(e.target.parentElement.id);
    }
  }
}

// イベントリスナー登録と初期表示
addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskListClick);
renderTasks();
