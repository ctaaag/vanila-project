const myStorage = window.localStorage;

export const setStorageData = (key, data) => {
  myStorage.setItem(key, JSON.stringify(data));
};

export const getStorageData = (key) => {
  try {
    const item = myStorage.getItem(key);

    return JSON.parse(item) || [];
  } catch (e) {
    throw new Error('storage parsing error');
  }
};
