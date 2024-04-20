import { Order, OrderStatus } from '@/types/types';
import { fetchHandler } from '@/utils/apiHelpers';

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/order`;

export const getOrdersQueryFn = async () => {
  const data = await fetchHandler(baseUrl);
  return data;
};

export const createOrderMutationFn = async (order: Order) => {
  const data = await fetchHandler(baseUrl, 'POST', order);
  return data;
};

export const updateOrderStatusMutationFn = async (
  status: OrderStatus,
  id: string
) => {
  const data = await fetchHandler(baseUrl, 'PUT', { status, id });
  return data;
};

export const deleteOrderMutationFn = async (id: string) => {
  const data = await fetchHandler(`${baseUrl}/${id}`, 'DELETE');
  return data;
};
