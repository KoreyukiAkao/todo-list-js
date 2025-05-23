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

// タスクの完了状態を切り替える（既存・新規タスク両方対応）
taskList.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("completed");
  }
});