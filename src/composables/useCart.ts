import { deleteCartItems, getCartItems, updateCart } from '@/api/cart';
import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItems,
    enabled: !!CookiesServices.get('jwt'),
  });

  const { mutate: addToCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem: cartItem) => updateCart(cartItem),
  });
  const { mutate: removeFromCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (id: string) => deleteCartItems(id),
  });

  return { addToCart, cart, removeFromCart, isLoading };
};

export default useCart;
