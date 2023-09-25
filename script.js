//const userTitle = document.getElementById('user')
//const userTitle = document.getElementsByClassName("user")
//const userTitle = document.querySelector('.user')
//const userTitle = document.getElementsByTagName("h1")

// const userName = prompt('Enter name')
// const leastName = prompt('Enter leastName')

// const userTitle = document.querySelector('.user')
// userTitle.innerHTML = `<p>${userName}<p/><p>${leastName}</p>`

// const color = prompt('Enter color ')
// const box = document.querySelector('.box')
// box.style.backgroundColor = color

// const age = prompt('Enter age ')
// const box = document.querySelector('.box')
// let color = null
// if(age < 50) {
//     color = 'green'
// } else if (age < 80 && age > 50) {
//     color = 'yellow'
// } else if (age > 80) {
//     color = 'red'
// }
// box.style.backgroundColor = color

// const imageTag = document.querySelector("#image");
// function toggleImage() {
//     if(imageTag.getAttribute('src')) {
//         imageTag.removeAttribute('src')
//     } else {
//         imageTag.setAttribute('src', "./images/Screen Recording 2023-09-20 at 11.33.40 PM.jpeg")
//     }
// }

// const box = document.querySelector('.box')

// function colorChange(color) {

// box.style.backgroundColor = color;

//     }

const container = document.querySelector(".container");
const taskInput = document.querySelector("#task-input");
let boxNumeration = 0;

const addTask = () => {
  if (taskInput.value === "") {
    return null;
  }
  boxNumeration++;
  const box = document.createElement("div");
  box.classList.add("task");
  box.innerHTML = `<p>${taskInput.value}</p> <button class="deleteBtn">Delete</button>`;
  container.append(box);

  taskInput.value = "";

  document.querySelector(".deleteBtn").addEventListener("click", function () {
    box.remove();
  });
};
