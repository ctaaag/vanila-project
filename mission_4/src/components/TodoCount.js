export default function TodoCount({ $listDiv, state }) {
  this.state = state;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const totalTodo = this.state.data.length;
    const checkedTodo = this.state.data.filter(
      (item) => item.isCompleted
    ).length;

    $listDiv.innerHTML += this.state.isLoading
      ? ''
      : `
      <span class="todoCount">총 해야할 일: ${totalTodo}개 / 완료한 일: ${checkedTodo}개</span>
    `;
  };

  this.render();
}
