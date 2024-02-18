const input = document.querySelector("#input");
const listContainer = document.querySelector("#listContainer");
const count = document.querySelector(".count");
const li = document.querySelector("li");
count.textContent = listContainer.length;
console.log(listContainer.length);

const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");
const clearBtn = document.querySelector(".clr");

const add = document.querySelector(".add");

function updateCount() {
  count.textContent = listContainer.children.length;
}

add.addEventListener("click", function (event) {
  event.preventDefault();

  let li = document.createElement("li");
  li.innerHTML = input.value;
  listContainer.appendChild(li);
  // count.textContent = listContainer.children.length;
  updateCount();
  let span = document.createElement("span");
  span.innerHTML = "❌";
  li.appendChild(span);

  li.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("marked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      // count.textContent = listContainer.children.length;
      updateCount();
    }
  });
  activeBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) {
      const listItems = listContainer.querySelectorAll("li");
      listItems.forEach(function (li) {
        if (li.classList.contains("marked")) {
          li.style.display = "none";
        } else {
          li.style.display = "list-item";
        }
      });
    }
  });

  completedBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("completed")) {
      const listItems = listContainer.querySelectorAll("li");
      listItems.forEach(function (li) {
        if (!li.classList.contains("marked")) {
          li.style.display = "none";
        } else {
          li.style.display = "list-item";
        }
      });
    }
  });

  allBtn.addEventListener("click", function (e) {
    if (e.target.classList.contains("all")) {
      const listItems = listContainer.querySelectorAll("li");
      listItems.forEach(function (li) {
        li.style.display = "list-item";
      });
    }
  });
});

clearBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("clr")) {
    const listItems = listContainer.querySelectorAll("li");
    listItems.forEach(function (li) {
      li.remove();
    });
    updateCount();
  }
});
