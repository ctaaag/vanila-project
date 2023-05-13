export default function SearchResult({ $app, initialState, onClick }) {
  this.state = initialState;

  const $searchResult = document.createElement('ul');
  $searchResult.setAttribute('id', 'search-result');
  $app.appendChild($searchResult);

  this.render = () => {
    let innerHtml;

    if (this.state.length < 1) {
      innerHtml = '<div style="padding-top: 10px">검색된 결과가 없습니다</div>';
    } else {
      innerHtml = this.state
        .map(
          (data) =>
            `<li class="performance">
                <img class="performance__poster"
                  src="${data.poster}" alt="${data.title}">
                <div class="musician__container">
                  <h2>참가한 뮤지션</h2>
                  <ul class="musician__list">
                  ${data.musicians
                    .map(
                      (musician) =>
                        `<li class="musician__list__item">${musician}</li>`
                    )
                    .join('')}
                  </ul>
                </div>
            </li>`
        )
        .join('');
    }

    $searchResult.innerHTML = innerHtml;
    $searchResult.addEventListener('click', onClick);
  };

  this.setState = (resultData) => {
    this.state = resultData;
    this.render();
  };
}
