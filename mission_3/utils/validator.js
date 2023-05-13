// array 최대 개수 미만 확인
export const isMaxLength = (array, maxLength) => {
  return array.length < maxLength;
};

// 배열 내 중복 데이터 검사
export const isDuplicatedInArray = (array, data) => {
  const found = array.find((value) => value === data);
  // 중복데이터가 있으면 true, 없으면 false
  return found != undefined;
};
