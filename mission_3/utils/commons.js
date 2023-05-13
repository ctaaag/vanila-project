export const queryString = (key, data) => {
  return key + '=' + data;
};

let inputTimer;

export const debounce = ({ handler }) => {
  if (inputTimer) {
    clearTimeout(inputTimer);
  }

  inputTimer = setTimeout(handler, 300);
};
