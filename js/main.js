
const inputBox = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const todoList = document.querySelector('.todo-list');

// function = new task:
function addTask() {
    // get value from input box:
    const taskText = inputBox.value.trim();
    
    // ck if input is empty:
    if (!taskText) {
        alert("You must write something!");
        return; // exit the function early if input is empty
    }
    
    // create new list item with classList:
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    
    // create checkbox to mark task as done:
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    
    // create label for the task with classList:
    const label = document.createElement('label');
    label.textContent = taskText;
    label.classList.add('task-label');
    
    // create span element for the x button : 
    const span = document.createElement('span');
    span.textContent = '\u00d7';
    span.classList.add('close');
    
    // append checkbox, label, and span to the list item:
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(span);
    
    // append list item to the todo list:
    todoList.appendChild(listItem);
    
    // clear the input box:
    inputBox.value = '';
}

// function = handle marking tasks as done:
function toggleTaskCompletion(event) {
    if (event.target.matches('.task-checkbox')) {
        const listItem = event.target.closest('li');
        if (event.target.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    }
}

// function = handle deleting tasks:
function deleteTask(event) {
    if (event.target.matches('.close')) {
        const listItem = event.target.closest('li');
        listItem.remove();
    }
}

// add event listener to the add button:
addButton.addEventListener('click', addTask);

// add event listener to the todo list for handling task completion:
todoList.addEventListener('change', toggleTaskCompletion);

// add event listener to the todo list for handling task deletion:
todoList.addEventListener('click', deleteTask);