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
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Create failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Create failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });

  const { mutate: deleteOrder } = useMutation({
    mutationKey: ['order', id],
    mutationFn: () => deleteOrderMutationFn(id || ''),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['order'] });
      toast({
        title: 'Order Deleted',
        description: 'Your order has been deleted successfully',
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Delete failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Delete failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });
  const { mutate: updateOrderStatus } = useMutation({
    mutationKey: ['order', id],
    mutationFn: (status: OrderStatus) =>
      updateOrderStatusMutationFn(status, id || ''),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['order'] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Update failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Update failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });

  return { orders, isLoading, createOrder, deleteOrder, updateOrderStatus };
};

export default useOrder;
