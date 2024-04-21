import CookiesServices from '@/services/CookiesServices';

/**
 * Fetches data from the specified URL using the provided method and body.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {string} [method] - The HTTP method to use for the request. Defaults to 'GET'.
 * @param {object} [body] - The request body, serialized as JSON. Defaults to undefined.
 * @return {Promise<any>} - A promise that resolves to the fetched data, parsed as JSON.
 * @throws {Error} - If the response is not ok, throws an error with the error message from the response.
 */
export const fetchAuthHandler = async (
  url: string,
  method?: string,
  body?: object
) => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error.message);
  }
  return await response.json();
};
export const fetchUnAuthHandler = async (
  url: string,
  method?: string,
  body?: object
) => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error.message);
  }
  return await response.json();
};
