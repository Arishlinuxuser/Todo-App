let body = document.querySelector("body");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");
let warning = document.querySelector(".warning");

btn.addEventListener("click", function (event) {
  event.stopPropagation();
  if (input.value.trim() === "") {
    getWar();
  } else {
    listSty();
    let task = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del-btn");
    deleteBtn.innerText = "delete";
    task.innerText = input.value.trim();
    task.append(deleteBtn);
    ul.append(task);

    input.value = "";
  }
});

function listSty() {
  if (ul.style.padding == "0px") {
    ul.style.padding = "20px";
  }
}

function getWar() {
  warning.innerText = "Please Enter a Task first";
  warning.classList.add("show");
  setTimeout(() => {
    warning.innerText = "";
    warning.classList.remove("show");
  }, 1000);
}

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("del-btn")) {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
  if (ul.children.length <= 0) {
    ul.style.padding = "0px";
  }
});
