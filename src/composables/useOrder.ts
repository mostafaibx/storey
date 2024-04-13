import {
  createOrderMutationFn,
  deleteOrderMutationFn,
  getOrdersQueryFn,
  updateOrderStatusMutationFn,
} from '@/api/orders';
import CookiesServices from '@/services/CookiesServices';
import { Order, OrderStatus } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useCart from './useCart';
import { toast } from '@/components/ui/use-toast';

const useOrder = (id?: string) => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ['order'] });
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { data: orders, isLoading } = useQuery({
    queryKey: ['order'],
    queryFn: getOrdersQueryFn,
    enabled: !!CookiesServices.get('jwt'),
  });

  const { mutate: createOrder } = useMutation({
    mutationKey: ['order'],
    mutationFn: (order: Order) => createOrderMutationFn(order),
    onSuccess(data) {
      navigate(`/checkout/${data.number}`);
      clearCart();
    },
  });

  const { mutate: deleteOrder } = useMutation({
    mutationKey: ['order', id],
    mutationFn: () => deleteOrderMutationFn(id || ''),
    onSuccess: () => {
      toast({
        title: 'Order Deleted',
        description: 'Your order has been deleted successfully',
      });
    },
  });
  const { mutate: updateOrderStatus } = useMutation({
    mutationKey: ['order', id],
    mutationFn: (status: OrderStatus) =>
      updateOrderStatusMutationFn(status, id || ''),
  });

  return { orders, isLoading, createOrder, deleteOrder, updateOrderStatus };
};

export default useOrder;
