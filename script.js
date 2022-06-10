const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

/* 기획 
1. 입력한 내용 할일 리스트에 추가
2. 할일 리스트를 클릭하면 한일로 이동, 한일 리스트를 클릭하면 할일로 이동
3. 한일/할일 리스트에서 영구 삭제, 페이지에 표시하지 않기  
*/

/* 
1. 입력한 내용 할일 리스트에 추가
click 이벤트 발생 시에 input을 todo-list에 저장 
*/
const TODO = 'todo';
let todo = [];
let ID = 0;

class newTodo {
  constructor(todoText) {
    this.text = todoText;
    this.id = todo.length + 1;
    this.done = false;
  }
}

const saveTodo = function () {
  console.log('save is running');
  localStorage.setItem(TODO, JSON.stringify(todo));
};

useEffect(() => {
  const todoStorage = localStorage.getItem('todoList');
  const doneStorage = localStorage.getItem('doneList');

  // localStorage에 저장된 list가 있는지 확인
  if (todoStorage) {
    const loadTodo = JSON.parse(todoStorage);
    setTodoList(loadTodo);
  }
  if (doneStorage) {
    const loadDone = JSON.parse(doneStorage);
    setDoneList(loadDone);
  }
}, []);

const toggleTodo = function (event) {
  ID = 1;
  console.log('toggle is running');
  const list = event.target;
  const index = list.parentNode;
  todo.forEach((element) => {
    if (element.id === Number(index.id)) {
      element.done = !element.done;
    }
  });
  todo.forEach((element) => {
    element.id = ID++;
  });
  saveTodo();
  loadTodoList();
};

const deleteTodo = function (event) {
  ID = 1;
  console.log('delete is running');
  const button = event.target;
  const index = button.parentNode;
  todo = todo.filter((toDo) => toDo.id !== Number(index.id));
  todo.forEach((element) => {
    element.id = ID++;
  });
  saveTodo();
  loadTodoList();
};

const addNewTodo = function () {
  const inputText = todoInput.value;
  if (!inputText) {
    alert('입력한 내용이 없어요!');
  } else {
    const thisTodo = new newTodo(inputText);
    todo.push(thisTodo);
    saveTodo();
    loadTodoList();
    todoInput.value = '';
  }
};

/* HTML todoList 요소에  */
const paintTodo = function () {
  ID = 1;
  todoList.innerHTML = '';
  doneList.innerHTML = '';
  todo.forEach((element) => {
    const newCheckbox = document.createElement('button');
    newCheckbox.addEventListener('click', toggleTodo);
    newCheckbox.innerText = '✔';
    const li = document.createElement('li');
    li.id = ID++;
    const newTodoText = document.createTextNode(element.text);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '✖';
    deleteBtn.addEventListener('click', deleteTodo);
    li.appendChild(newCheckbox);
    li.appendChild(newTodoText);
    li.appendChild(deleteBtn);
    element.done ? doneList.append(li) : todoList.append(li);
  });
  saveTodo();
};

const loadTodoList = function () {
  const loadedTodoList = localStorage.getItem(TODO);
  if (loadedTodoList != null) {
    todo = JSON.parse(loadedTodoList);
    paintTodo();
  }
};

const init = function () {
  loadTodoList();
};

init();
addTodoBtn.addEventListener('click', addNewTodo);
