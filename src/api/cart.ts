import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';
import { cartFetchHandler } from '@/utils/apiHelpers';

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/cart`;

export const getCartItemsQueryFn = async () => {
  try {
    const data = await cartFetchHandler(baseUrl);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast({
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        description: 'An unknown error occurred',
        variant: 'destructive',
      });
    }
  }
};

export const updateCartMutationFn = async (cartItem: cartItem) => {
  const data = await cartFetchHandler(baseUrl, 'POST', cartItem);
  return data;
};

export const deleteCartItemsMutationFn = async (id: string) => {
  const data = await cartFetchHandler(`${baseUrl}/${id}`, 'DELETE');
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
