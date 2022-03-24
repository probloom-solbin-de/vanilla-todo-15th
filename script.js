const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');

const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.done-list');


/* 기획 */

/* 
1. 입력한 내용 할일 리스트에 추가
2. 할일 리스트를 클릭하면 한일로 이동, 한일 리스트를 클릭하면 할일로 이동
3. 한일/할일 리스트에서 영구 삭제, 페이지에 표시하지 않기  
*/

/* click 이벤트 발생 시에 input을 todo-list에 저장 */

const function addNewTodo(){
    var list = document.createElement('li');
    if (!todoInput.value) {
        alert('입력한 내용이 없어요!');
    } else {
        list.innerText = todoInput.value;
        todoList.appendChild(list);
        todoInput.value = '';
    }
};

/* click 이벤트 발생 시에 input을 todo-list에 저장 */

addTodoBtn.addEventListener('click', addNewTodo);

/* todo-list와 done-list를 관리*/

/* todo-list와 done-list가 0개 이하로 떨어지지 않도록 관리 */
