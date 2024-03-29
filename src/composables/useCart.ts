import {
  clearCartMutationFn,
  deleteCartItemsMutationFn,
  getCartItemsQueryFn,
  updateCartMutationFn,
} from '@/api/cart';
import { cartItem } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItemsQueryFn,
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
