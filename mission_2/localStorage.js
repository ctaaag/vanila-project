export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert('데이터 저장 실패');
  }
};

export const getItem = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return defaultValue;
    }
    return JSON.parse(value);
  } catch (e) {
    alert('저장된 데이터 호출 실패');
  }
};
