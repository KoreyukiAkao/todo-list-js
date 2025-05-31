let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    let taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskItem.id = "taskItem-${Date.now()}"
    taskList.appendChild(taskItem);
    taskInput.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton"
    taskItem.appendChild(deleteButton)
  }
});

taskList.addEventListener("click", function (e) {
  console.log(e);
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("completed");
  }else if (e.target && e.target.className === "deleteButton") {
    confirm('Are you sure you want to delete this task?');
    e.target.parentElement.remove();
  }
});