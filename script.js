const container = document.querySelector(".box-container");
const taskInput = document.querySelector("#task-input");
const warningArea = document.querySelector(".input-container");
const warning = document.createElement("p");
const editBtn = document.querySelector("editBtn");

let currTask = null;

warning.innerText = "Please write some task";
warning.style.color = "red";

function addTask() {
  if (currTask) {
    currentTaskText = currTask;
    currentTaskText.innerText = taskInput.value;
    currTask = null;
  } else {
    if (taskInput.value === "") {
      warningArea.append(warning);
      return null;
    }
    warning.remove();
    addTaskBox(styleTask(createTask()));
  }
}

function createTask() {
  const box = document.createElement("div");
  return box;
}

function styleTask(box) {
  box.classList.add("task");
  return box;
}
function addTaskBox(box) {
  box.innerHTML = `<p class="taskTxt">${taskInput.value}</p> <button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`;
  container.append(box);

  box.querySelector(".deleteBtn").addEventListener("click", function () {
    console.log("clicked");
    box.remove();
  });
  taskInput.value = "";
  box.querySelector(".editBtn").addEventListener("click", () => {
    taskInput.value = box.querySelector(".taskTxt").innerText;
    currTask = box.querySelector(".taskTxt");
  });
}
