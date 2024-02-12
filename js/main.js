/**
 * This function is useful for selecting DOM Elements
 * @param {string} s the selector of the element
 * @param {HTMLElement} p the parent of the element
 * @returns an HTMLElement
 */
const $ = (s, p = document) => p.querySelector(s);
const genID = () => Math.random().toString(36).slice(2, 8);

// UI DOM elements
const form = $("form");
const todoList = $("ul.todo-list");
const taskInput = $("#task-input");

const deleteBtn = $(".delete-btn");

//global variables
const todos = [];

init();

function init() {
  form.addEventListener("submit", onFormSubmit);
  
}

function onFormSubmit(event) {
  event.preventDefault();
  // on new task entered --> create new list item
  todos.push({
    id: genID(),
    task: taskInput.value,
    completed: false,
  });
  render();
}

function render() {
  let markup = "";
  // loop over todos array
  for (let todo of todos) {
    // each item will be translated to li item in the ul...
    markup += `<li class="todo-item">
        <input type="checkbox" id="check" ${todo.completed ? "checked" : ""}>
        <label for="check">${todo.task}</label>
        <span class="delete-btn"><i class="fa-regular fa-trash-can"></i></span>
      </li>`;
  }
  //   console.log(todos);
  todoList.innerHTML = markup;
}
