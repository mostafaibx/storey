const date = new Date();
date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
export const options = {
  path: '/',
  expires: date,
};

/**
 * Sends an HTTP request to the specified URL with the given method and body.
 *
 * @param {string} url - The URL to send the request to.
 * @param {string} [method] - The HTTP method to use for the request. Defaults to 'GET'.
 * @param {object} [body={}] - The request body, serialized as JSON. Defaults to an empty object.
 * @return {Promise<any>} - A promise that resolves to the response body, parsed as JSON.
 * @throws {Error} - If the response is not ok, throws an error with the error message from the response.
 */
export const authFetchHandler = async (
  url: string,
  method?: string,
  body: object = {}
) => {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error.message);
  }
  return await response.json();
};
