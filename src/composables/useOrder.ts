import {
  createOrderMutationFn,
  deleteOrderMutationFn,
  getOrdersQueryFn,
  updateOrderStatusMutationFn,
} from '@/api/orders';
import { Order, OrderStatus } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useOrder = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ['order'],
    queryFn: getOrdersQueryFn,
  });

  const { mutate: createOrder } = useMutation({
    mutationKey: ['order'],
    mutationFn: (order: Order) => createOrderMutationFn(order),
  });

  const { mutate: deleteOrder } = useMutation({
    mutationKey: ['order'],
    mutationFn: (id: string) => deleteOrderMutationFn(id),
  });

  const { mutate: updateOrderStatus } = useMutation({
    mutationKey: ['order'],
    mutationFn: (status: OrderStatus, id: string) =>
      updateOrderStatusMutationFn(status, id),
  });

  return { orders, isLoading, createOrder, deleteOrder, updateOrderStatus };
};

export default useOrder;
