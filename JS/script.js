let todo = JSON.parse(localStorage.getItem("todo")) || [];

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addButton = document.querySelector(".btn");
const taskList = document.getElementById("taskList");
const btnFilter = document.getElementById("btn-filter");
const clearAll = document.getElementById("btn-clearAll");

// Initialize the display
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    btnFilter.addEventListener("click", filterTask);
    clearAll.addEventListener("click", clearAllTasks);
    displayTasks();
});

function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false,
        });
        displayTasks();
    }
}

function displayTasks() {

}

function filterTask() {

}

function clearAllTasks() {

}