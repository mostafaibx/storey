import { toast } from '@/components/ui/use-toast';
import { cartItem } from '@/types/types';
import { fetchAuthHandler } from '@/utils/apiHelpers';

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/cart`;

export const getCartItemsQueryFn = async () => {
  try {
    const data = await fetchAuthHandler(baseUrl);
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
  const data = await fetchAuthHandler(baseUrl, 'POST', cartItem);
  return data;
};

export const deleteCartItemsMutationFn = async (id: string) => {
  const data = await fetchAuthHandler(`${baseUrl}/${id}`, 'DELETE');
  return data;
};

export const clearCartMutationFn = async () => {
  const data = await fetchAuthHandler(`${baseUrl}`, 'DELETE');
  return data;
};
