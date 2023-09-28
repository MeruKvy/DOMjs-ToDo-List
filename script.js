const container = document.querySelector(".box-container");
const taskInput = document.querySelector("#task-input");
const warningArea = document.querySelector(".input-container");
const warning = document.createElement("p");

warning.innerText = "Please write some task";
warning.style.color = "red";

function addTask() {
  if (taskInput.value === "") {
    warningArea.append(warning);
    return null;
  }
  warning.remove()
  addTaskBox(styleTask(createTask()));
}

function createTask() {
  const box = document.createElement("div");
  return box;
}

function styleTask(box) {
  box.innerHTML = `<p>${taskInput.value}</p> <button class="deleteBtn">Delete</button>`;
  box.classList.add("task");
  return box;
}
function addTaskBox(box) {
  container.append(box);
  box.addEventListener("click", function () {
    box.remove();
  });
  taskInput.value = "";
}
