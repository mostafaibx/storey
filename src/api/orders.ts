import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { Order, OrderStatus } from '@/types/types';

export const getOrders = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/order`, {
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    toast({
      description: 'Could not get orders. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};

export const createOrderMutationFn = async (order: Order) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/order`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    toast({
      description: 'Could not create order. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};

export const updateOrderStatusMutationFn = async (
  status: OrderStatus,
  id: string
) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/order`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status, id }),
  });
  if (!response.ok) {
    toast({
      description: 'Could not update order. Please try again.',
      variant: 'destructive',
    });
  }

  const data = await response.json();
  return data;
};

export const deleteOrderMutationFn = async (id: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/order/${id}`,
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
      description: 'Could not delete order. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await response.json();
  return data;
};
