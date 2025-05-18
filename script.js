let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    // Add the new item to the task list
    taskList.appendChild(li);
    // Clear the input field
    taskInput.value = "";
  }
});