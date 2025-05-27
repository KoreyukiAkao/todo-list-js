let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// When the addTaskButton gets a click,
// if the taskInput value is empty,
// show a message: “Please enter a task.”
// stop.
// else,
// make a new list item (li).
// put the taskInput value into the list item.
// add the list item to the taskList.
// clear the taskInput value.
addTaskButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Toggle the completion status of tasks (for both existing and new tasks)
taskList.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("completed");
  }
});