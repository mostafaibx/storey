import { updateCart } from '@/api/cart';
import { useMutation } from '@tanstack/react-query';

const useCartMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem) => updateCart(cartItem),
  });
  return { mutate };
};

export default useCartMutation;
