import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';

export const updateCart = async (cartItem: cartItem) => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(cartItem),
  });
  const data = await res.json();
  return data;
};

export const getCartItems = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
    },
  });
  const data = await response.json();
  return data;
};
export const deleteCartItems = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
    },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  return data;
};
