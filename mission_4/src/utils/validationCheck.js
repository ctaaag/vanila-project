export const checkData = (data) => {
  if (!data) {
    throw new Error('Data를 확인해주세요');
  }
  if (!Array.isArray(data)) {
    throw new Error('배열 타입의 data를 입력하세요');
  }

  data.forEach(({ content, isCompleted }) => {
    if (typeof content !== 'string' || typeof isCompleted !== 'boolean')
      throw new Error('데이터의 내용을 확인해주세요');
  });
};

export const checkTodoItem = (data) => {
  if (data.trim().length === 0) {
    throw new Error('Data를 입력해주세요');
  }
  if (!data) {
    throw new Error('Data를 확인해주세요');
  }
};
