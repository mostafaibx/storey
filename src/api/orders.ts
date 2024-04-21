import { Order, OrderStatus } from '@/types/types';
import { fetchAuthHandler } from '@/utils/apiHelpers';

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/order`;

export const getOrdersQueryFn = async () => {
  const data = await fetchAuthHandler(baseUrl);
  return data;
};

export const createOrderMutationFn = async (order: Order) => {
  const data = await fetchAuthHandler(baseUrl, 'POST', order);
  return data;
};

export const updateOrderStatusMutationFn = async (
  status: OrderStatus,
  id: string
) => {
  const data = await fetchAuthHandler(baseUrl, 'PUT', { status, id });
  return data;
};

export const deleteOrderMutationFn = async (id: string) => {
  if (!id) return;
  const data = await fetchAuthHandler(`${baseUrl}/${id}`, 'DELETE');
  return data;
};
