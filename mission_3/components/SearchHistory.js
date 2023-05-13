import { HISTORY_MAX_LENGTH, HISTORY_STORAGE_KEY } from '../utils/constants.js';
import { isMaxLength, isDuplicatedInArray } from '../utils/validator.js';
import { setStorageData } from '../utils/localStorage.js';

export default function SearchHistory({ $app, initialState, onClick }) {
  this.state = initialState;

  const $historyTitle = document.createElement('h4');
  $app.appendChild($historyTitle);

  const $searchHistory = document.createElement('ul');
  $searchHistory.setAttribute('id', 'search-history');
  $app.appendChild($searchHistory);

  this.render = () => {
    $historyTitle.innerText = this.state.length > 0 ? '최근검색어' : '';

    $searchHistory.innerHTML = this.state
      .map((word) => `<li>${word}</li>`)
      .join('');

    $searchHistory.addEventListener('click', onClick);
  };

  this.setState = (searchWord) => {
    // 같은 이름의 검색어는 중첩해서 들어가지 않음
    if (isDuplicatedInArray(this.state, searchWord)) return;

    // 최대 5개까지 쌓이도록 하되, 오래된 순으로 검색어를 삭제함
    if (!isMaxLength(this.state, HISTORY_MAX_LENGTH)) {
      this.state.pop();
    }

    // 히스토리를 최신순으로 보이도록 함
    this.state.unshift(searchWord);

    setStorageData(HISTORY_STORAGE_KEY, this.state);
    this.render();
  };

  this.render();
}
