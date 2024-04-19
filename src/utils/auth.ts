const date = new Date();
date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
export const options = {
  path: '/',
  expires: date,
};

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
