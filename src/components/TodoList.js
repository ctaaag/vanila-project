export default function TodoList({
  $listDiv,
  state,
  checkCompleted,
  removeTodo,
}) {
  if (!new.target) {
    throw new Error('New 키워드를 추가해주세요');
  }
  this.state = state;
  this.checkCompleted = checkCompleted;
  this.removeTodo = removeTodo;

  this.render = () => {
    const loadingTemplate = `<div class="loading_overlay">
        <img src="../images/loading.gif" alt="loading" class="loading_img"/>
    </div>`;
    const todoListTemplate = `
    <ul>
      ${this.state.data
        .map(
          (item) =>
            `<li data-id=${item._id}>
              <span class= "todo_text ${
                item.isCompleted ? 'todo_strike' : ''
              }" >
              ${item.content}</span>
              <button type="button" class="remove_btn">삭제</button>
            </li>`
        )
        .join('')}
    </ul>`;
    $listDiv.innerHTML = this.state.isLoading
      ? loadingTemplate
      : todoListTemplate;
  };

  $listDiv.addEventListener('click', (e) => {
    const clickTodoId = e.target.parentNode.dataset.id;
    if (e.target.classList.contains('todo_text')) {
      this.checkCompleted(clickTodoId);
    }
    if (e.target.className === 'remove_btn') {
      this.removeTodo(clickTodoId);
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
