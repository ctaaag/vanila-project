import { checkTodoItem } from '../utils/validationCheck.js';

export default function TodoInput({ $formDiv, addTodo, customEvent }) {
  this.addTodo = addTodo;
  this.customEvent = customEvent;

  this.render = () => {
    $formDiv.innerHTML = `
    <form>
      <input type="text" placeholder="할 일을 입력하세요." class="todo-input"></input>
      <button type="submit">추가</button>
      <button type="button" class="removeAll-btn">전체 삭제</button>
    </form>
  `;
  };
  this.render();
  this.input = document.querySelector('.todo-input');
  this.removeBtn = document.querySelector('.removeAll-btn');

  this.submitHandler = (e) => {
    e.preventDefault();

    const newData = this.input.value;
    checkTodoItem(newData);
    this.addTodo(newData);
    this.input.value = '';
  };

  $formDiv.addEventListener('submit', (e) => {
    this.submitHandler(e);
  });

  this.removeBtn.addEventListener('click', () => {
    window.dispatchEvent(this.customEvent);
  });
}
