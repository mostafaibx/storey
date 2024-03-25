import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';

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

export const updateCartMutationFn = async (cartItem: cartItem) => {
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

export const deleteCartItemsMutationFn = async (id: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/cart/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${CookiesServices.get('jwt')}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    toast({
      description: 'Could not delete item. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};

export const clearCartMutationFn = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    toast({
      description: 'Could not clear cart. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};
