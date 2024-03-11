import { deleteCartItems, getCartItems, updateCart } from '@/api/cart';
import CookiesServices from '@/services/CookiesServices';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItems,
    enabled: !!CookiesServices.get('jwt'),
  });

  const { mutate: addToCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem) => updateCart(cartItem),
  });
  const { mutate: removeFromCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (id) => deleteCartItems(id),
  });

  return { addToCart, cart, removeFromCart, isLoading };
};

export default useCart;
