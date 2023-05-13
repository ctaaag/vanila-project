export const getResponse = async ({ method, query }) => {
  const endPoint = 'https://api.idiots.band/api/search?';
  const requestUrl = endPoint + query;

  const response = await fetch(requestUrl, { method: method });

  if (!response.ok) throw new Error(`HTTP error! status : ${response.status}`);

  const responseData = await response.json();
  return responseData;
};
