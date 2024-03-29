import {
  createOrderMutationFn,
  deleteOrderMutationFn,
  getOrdersQueryFn,
  updateOrderStatusMutationFn,
} from '@/api/orders';
import { Order, OrderStatus } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useOrder = (id?: string) => {
  const navigate = useNavigate();

  const { data: orders, isLoading } = useQuery({
    queryKey: ['order'],
    queryFn: getOrdersQueryFn,
  });

  const { mutate: createOrder } = useMutation({
    mutationKey: ['order'],
    mutationFn: (order: Order) => createOrderMutationFn(order),
    onSuccess(data) {
      navigate(`/checkout/${data.id}`);
    },
  });

  const { mutate: deleteOrder } = useMutation({
    mutationKey: ['order', id],
    mutationFn: () => deleteOrderMutationFn(id),
  });
  const { mutate: updateOrderStatus } = useMutation({
    mutationKey: ['order', id],
    mutationFn: (status: OrderStatus) =>
      updateOrderStatusMutationFn(status, id),
  });

  return { orders, isLoading, createOrder, deleteOrder, updateOrderStatus };
};

export default useOrder;
