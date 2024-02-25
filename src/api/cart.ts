import CookiesServices from '@/services/CookiesServices';

export const updateCart = async (cartItem: any) => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      cart: cartItem,
    }),
  });
  const data = await res.json();
  return data;
};

export const getCartItems = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/users/me`,
    {
      headers: {
        Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
