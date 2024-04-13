import {
  clearCartMutationFn,
  deleteCartItemsMutationFn,
  getCartItemsQueryFn,
  updateCartMutationFn,
} from '@/api/cart';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { cartItem } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

// might implement Queue mutation & optimistic updates for offline mode

const useCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItemsQueryFn,
    enabled: !!CookiesServices.get('jwt'),
  });

  const { mutate: addToCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem: cartItem) => updateCartMutationFn(cartItem),
    onSuccess: () => {
      toast({
        title: 'Item added to cart',
        description: 'Item added to cart successfully',
      });
    },
  });
  const { mutate: removeFromCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (id: string) => deleteCartItemsMutationFn(id),
    onSuccess: () => {
      toast({
        title: 'Item removed from cart',
        description: 'Item removed from cart successfully',
      });
    },
  });
  const { mutate: clearCart } = useMutation({
    mutationKey: ['cart'],
    mutationFn: () => clearCartMutationFn(),
  });

  return { addToCart, cart, removeFromCart, isLoading, clearCart };
};

export default useCart;
