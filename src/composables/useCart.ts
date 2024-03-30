import {
  clearCartMutationFn,
  deleteCartItemsMutationFn,
  getCartItemsQueryFn,
  updateCartMutationFn,
} from '@/api/cart';
import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItemsQueryFn,
    enabled: !!CookiesServices.get('jwt'),
  });

  const { mutate: addToCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem: cartItem) => updateCartMutationFn(cartItem),
  });
  const { mutate: removeFromCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (id: string) => deleteCartItemsMutationFn(id),
  });
  const { mutate: clearCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: () => clearCartMutationFn(),
  });

  return { addToCart, cart, removeFromCart, isLoading, clearCart };
};

export default useCart;
