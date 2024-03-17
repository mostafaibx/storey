import { toast } from '@/components/ui/use-toast';
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
  if (!res.ok) {
    toast({
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await res.json();
  if (data.error.status === 401) {
    toast({
      description: 'Please Login to be able to add items to cart',
      variant: 'destructive',
    });
  }
  return data;
};

export const getCartItems = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
    },
  });
  if (!response.ok) {
    toast({
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};
export const deleteCartItems = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) {
    toast({
      description: 'Could not delete item. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};
