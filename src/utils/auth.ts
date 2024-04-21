const date = new Date();
date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
export const options = {
  path: '/',
  expires: date,
};
