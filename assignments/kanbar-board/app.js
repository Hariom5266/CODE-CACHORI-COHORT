document.addEventListener('DOMContentLoaded', function () {
  const addTask = document.getElementById("addTask");
  const addColumn = document.getElementById("addColumn");

  const todo = document.getElementById("todo");
  const doing = document.getElementById("doing");
  const done = document.getElementById("done");

  const taskModal = document.getElementById("taskModal");
  // const closeBtn = document.querySelector(".close-btn");
  const closeBtns = document.getElementsByClassName("close-btn");
  const taskCloseBtn = closeBtns[0];
  const columnCloseBtn = closeBtns[1];

  const columnModal = document.getElementById("columnModal");

  addTask.addEventListener("click", function () {
    taskModal.style.display = "flex";
  })

  taskCloseBtn.addEventListener("click", function () {
    taskModal.style.display = "none";
  })

  // Add Task
  const taskTitle = document.getElementById("taskTitle");
  const taskDesc = document.getElementById("taskDesc");

  const taskAddBtn = document.getElementsByClassName("submit-btn")[0];
  taskAddBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const newTask = document.createElement("div");
    newTask.classList.add("task-card");
    newTask.innerHTML = `
    <h1 class="task-title">${taskTitle.value}</h1>
    <p clas="task-desc">${taskDesc.value}</p>
    `;
    todo.appendChild(newTask)
    console.log(newTask);
    taskTitle.value = null;
    taskDesc.value = null;
    setTimeout(() => { taskModal.style.display = "none"; }, 100)
  })






})