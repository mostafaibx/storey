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
export const addressFetchHandler = async (
  url: string,
  method?: string,
  body?: object
) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error.message);
  }

  const data = await response.json();
  return data;
};

/**
 * Fetches data from the specified URL using the provided method and body.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {string} [method] - The HTTP method to use for the request. Defaults to 'GET'.
 * @param {object} [body] - The request body, serialized as JSON. Defaults to undefined.
 * @return {Promise<any>} - A promise that resolves to the fetched data, parsed as JSON.
 * @throws {Error} - If the response is not ok, throws an error with the error message from the response.
 */
export const fetchHandler = async (
  url: string,
  method?: string,
  body?: object
) => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error.message);
  }
  return await response.json();
};
