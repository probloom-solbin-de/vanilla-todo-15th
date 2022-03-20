const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListTitle = document.getElementById('todo-list-title');
const doneListTitle = document.getElementById('done-list-title');
const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done-list');

let todo = [];

/* click 이벤트 발생 시에 input을 todo-list에 저장 */

const addNewTodo = (e) => {
    if(!inputBox.value){
        alert('내용이 없어요.');
    }
    else{
        todoList.appendChild(inputBox.value);
        todoInput.value = "";
    }
}

const setTodo = (newTodo) => {
    todo = newTodo;
}

addNewTodo.addEventListener('click', addNewTodo);

/* todo-list와 done-list를 관리*/



/* todo-list와 done-list가 0개 이하로 떨어지지 않도록 관리 */