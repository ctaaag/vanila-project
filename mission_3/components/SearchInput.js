export default function SearchInput({ $app }) {
  this.render = () => {
    const $searchInput = document.createElement('input');
    $searchInput.setAttribute('id', 'search-keyword');
    $searchInput.setAttribute('placeholder', '검색어를 입력해주세요');
    $app.appendChild($searchInput);
  };

  this.render();
}
