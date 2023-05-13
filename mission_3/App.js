import { HISTORY_STORAGE_KEY } from '../utils/constants.js';
import { getResponse } from './utils/httpRequest.js';
import { getStorageData } from './utils/localStorage.js';
import { queryString, debounce } from './utils/commons.js';

import SearchHistory from './components/SearchHistory.js';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';

const $app = document.querySelector('#app');
function App({ $app }) {
  this.render = () => {
    const h1El = document.createElement('h1');
    h1El.innerText = '이디어츠 공연 검색기';
    $app.appendChild(h1El);

    const searchHistory = new SearchHistory({
      $app,
      initialState: getStorageData(HISTORY_STORAGE_KEY),
      onClick: (e) => {
        if (e.target.nodeName === 'LI') {
          const searchWord = e.target.innerText;

          const inputEl = document.querySelector('#search-keyword');
          inputEl.value = searchWord;

          searchHandler(searchWord);
        }
      },
    });

    const searchInput = new SearchInput({ $app });
    const searchResult = new SearchResult({
      $app,
      initialState: [],
      onClick: (e) => {
        if (e.target.className === 'musician__list__item') {
          const searchWord = e.target.innerText;

          const inputEl = document.querySelector('#search-keyword');
          inputEl.value = searchWord;

          searchHandler(searchWord);
        }
      },
    });

    const searchHandler = async (searchWord) => {
      const resultData = await getResponse({
        method: 'GET',
        query: queryString('keyword', searchWord),
      });

      searchResult.setState(resultData);
    };

    document
      .querySelector('#search-keyword')
      .addEventListener('keyup', function (e) {
        debounce({
          handler: () => {
            let searchWord = e.target.value;
            searchWord = searchWord.trim();

            if (!searchWord) return;

            searchHandler(searchWord);
            searchHistory.setState(searchWord);
          },
        });
      });
  };

  this.render();
}

new App({ $app });
