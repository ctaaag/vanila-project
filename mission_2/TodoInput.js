export default function TodoInput({ $target, addTodo, onRemoveAllClick }) {
  this.$element = document.createElement('form');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input type="text" placeholder="할일을 입력하세요!"/>
      <button>추가하기</button>
      <button class="remove-all">모두지우기</button>
    `;
  };

  this.render();

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');

    const { value } = $input;
    if (value.length > 0) {
      addTodo(value);
      $input.value = '';
    }
  });

  this.$element.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all') {
      // onRemoveAllClick();
      window.dispatchEvent(new Event('removeAll'));
    }
  });
}
