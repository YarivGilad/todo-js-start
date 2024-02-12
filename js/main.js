                               
/**
 * This function is usful for selecting DOM Elements
 * @param {string} s the selector  of  the Elements
 * @param {HTMLElement} p the parent of the Elements
 * @returns 
 */

const $ = (s,p = document)=> p.querySelector(s);
const keyGen = ()=> Math.random().toString(36).slice(2,8);

// UI DOM Elements
const form = $('form');
const todoList = $('ul.todo-list');
const taskInput = $('#task-input');

// global variables 
const randNum = (Math.random() * (256**3) ).toString(36); 
const todos = [
    {
        id: keyGen(),
        task: 'buy mil',
        comleted:false,
    }
]

init();

function init(){
    form.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(event){
    event.preventDefault()
    
    // on new task creates ---> new List item
        todos.push({
                id:keyGen(),
                task: taskInput.value,
                comleted: false
        })
        render();
}

function render(){
    let markup = '';
    //loop over todos Array
    for (let todo of todos) {
        //each items will be translated to li item in the ul.. 
        markup += `<li class="todo-items">
        <input type="checkbox" id="check" ${todo.comleted ? 'checked' : ''}>
        <label for="check">${todo.task}</label>
        <span>X</span>
      </li>`
    }
    todoList.innerHTML = markup;
}
        
        
