export default function TodoList({
  $target,
  initialState,
  onClick,
  onRemoveClick,
}) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  console.log(this.state);

  this.render = () => {
    this.$element.innerHTML = this.state
      .map(
        (todo, index) =>
          `<li data-index="${index}">${todo.isCompleted ? '[완료]' : ''}${
            todo.text
          }<button>지우기</button></li>`
      )
      .join('');

    // this.$element.querySelectorAll('li').forEach(($li, index) => {
    //   $li.addEventListener('click', () => onClick(index));
    //   $li.querySelector('button').addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     onRemoveClick(index);
    //   });
    // });
  };

  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');

    console.log($li);

    if (!$li) {
      return;
    }

    const index = $li.dataset.index;

    if (e.target.tagName === 'LI') {
      onClick(index);
    } else if (e.target.tagName === 'BUTTON') {
      onRemoveClick(index);
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
