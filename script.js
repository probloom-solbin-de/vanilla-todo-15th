const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

/* 기획 
1. 입력한 내용 할일 리스트에 추가
2. 할일 리스트를 클릭하면 한일로 이동, 한일 리스트를 클릭하면 할일로 이동
3. 한일/할일 리스트에서 영구 삭제, 페이지에 표시하지 않기  
*/

/* 1. 입력한 내용 할일 리스트에 추가
click 이벤트 발생 시에 input을 todo-list에 저장 
*/
const TODO = 'todo';
const todo = [];

class newTodo {
  constructor(todoText) {
    this.text = todoText;
    this.id = todo.length + 1;
    this.done = false;
  }
}

const saveTodo = function (todoText) {
  console.log('savetodo is running.');
  const newtodo = new newTodo(todoText);
  todo.push(newtodo);
  localStorage.setItem(TODO, JSON.stringify(todo));
};

/* HTML todoList 요소에  */
const paintTodo = function (inputText) {
  const newTodo = document.createElement('li');
  const newTodoText = document.createTextNode(inputText);
  newTodo.appendChild(newTodoText);
  todoList.appendChild(newTodo);
};

const addTodo = function (inputText) {
  paintTodo(inputText);
  todoInput.value = '';
  saveTodo(inputText);
};

const addNewTodo = function () {
  const inputText = todoInput.value;
  if (!inputText) {
    alert('입력한 내용이 없어요!');
  } else {
    addTodo(inputText);
  }
};

const loadTodoList = function () {
  console.log('loadtodolist is running.');
  const loadedTodoList = localStorage.getItem(TODO);
  if (loadedTodoList != null) {
    const parsedTodoList = JSON.parse(loadedTodoList);
    for (let Todo of parsedTodoList) {
      const inputText = Todo.text;
      addTodo(inputText);
    }
  }
};

const init = function () {
  loadTodoList();
  console.log('Init is running.');
};

init();
