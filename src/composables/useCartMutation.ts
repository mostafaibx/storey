import CookiesServices from '@/services/CookiesServices';
import { useMutation } from '@tanstack/react-query';

const updateCart = async (cartItem: any) => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      cart: cartItem,
    }),
  });
  const data = await res.json();
  return data;
};

const useCartMutation = () => {
  const { mutate } = useMutation({
    mutationKey: ['cart'],
    mutationFn: (cartItem) => updateCart(cartItem),
  });
  return { mutate };
};

export default useCartMutation;
