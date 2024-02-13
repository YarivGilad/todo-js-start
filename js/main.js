/**
 * This function is useful for selecting DOM Elements
 * @param {string} s the selector of the element
 * @param {HTMLElement} p the parent of the element
 * @returns an HTMLElement
 */
const $ = (s,p = document)=> p.querySelector(s);
const genID = ()=> Math.random().toString(36).slice(2,8);


// UI DOM elements
const form = $('form');
const todoList = $('ul.todo-list');
const taskInput = $('#task-input');

//global variables
const todos = [
    {
        id: genID(),
        task:'buy milk',
        completed:false
    }
];


init();

function init(){
    form.addEventListener('submit',onFormSubmit);
    $('.todo-list').addEventListener('mouseover',onMouseOver);
    render();
}

// (function init(){
//     form.addEventListener('submit',onFormSubmit);
// })();



function onFormSubmit(event){
    event.preventDefault();
    // on new task entered --> create new list item
    todos.push({
        id: genID(),
        task: taskInput.value,
        completed:false
    })
    render();
    taskInput.value = '';
}

function onMouseOver(event){
    /* if(event.target.classList.contains('todo-item')){
        const children = event.target.children;
        console.log(children[children.length - 1]);
    }else{
        const children = event.target.parentNode.children;
        console.log(children[children.length - 1]);
    } */
    
    /* let li;
    if(event.target.classList.contains('todo-item')){
        li = event.target;
    }else{
        li = event.target.parentNode
    } */

    let t = event.target;
    let li = t.classList.contains('todo-item')? t : t.parentNode;
    const children = li.children;
    console.log(children[children.length - 1]);
}

function render(){
    let markup = '';
    // loop over todos array
    for(let todo of todos) {
        // each item will be translated to li item in the ul...
        markup += `
      <li class="todo-item">
        <input type="checkbox" id="check" ${todo.completed ? 'checked' : ''}>
        <label for="check">${todo.task}</label>
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.7 19.55l5.88-5.89 3.35 3.36a3.57 3.57 0 0 1 0 5.05l-.83.83a3.57 3.57 0 0 1-5.05 0zM22.92 1.9l-.83-.83a3.57 3.57 0 0 0-5.05 0L12 6.12 6.95 1.07a3.57 3.57 0 0 0-5.05 0l-.83.83a3.57 3.57 0 0 0 0 5.05L6.12 12l-5.05 5.05a3.57 3.57 0 0 0 0 5.05l.83.83a3.57 3.57 0 0 0 5.05 0L12 17.88l3.68-3.68 2.2-2.2 5.05-5.05a3.57 3.57 0 0 0 0-5.05z" />
        </svg>
      </li>`
    }
    todoList.innerHTML = markup;
}


