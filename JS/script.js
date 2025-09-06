let todo = JSON.parse(localStorage.getItem("todo")) || [];

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addButton = document.querySelector(".addButton"); // Make sure your HTML has an element with class="addButton"
const taskList = document.getElementById("taskList");
const btnFilter = document.getElementById("btn-filter");
const btnClear = document.getElementById("btn-clearAll");


function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false,
        });
    }
        displayTasks();
}

document.addEventListener("DOMContentLoaded", function() {
    if (addButton) {
        addButton.addEventListener("click", addTask);
    }
    if (taskInput) {
        taskInput.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addTask();
            }
        });
    }
    if (btnFilter) {
        btnFilter.addEventListener("click", filterTask);
    }
    if (clearAll) {
        clearAll.addEventListener("click", clearAllTasks);
    }
    displayTasks();
});
    btnFilter.addEventListener("click", filterTask);
    btnClear.addEventListener("click", clearAllTasks);
    displayTasks();
    