import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Order } from '@/types/types';
import OrderStatusBar from './OrderStatusBar';
import useOrder from '@/composables/useOrder';

const OrderDialoge = ({ order }: { order: Order }) => {
  const { deleteOrder } = useOrder(order.id);

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>
            <p className='col-span-2'>Order number: {order.id}</p>
            <p>Date: {order.createdAt}</p>
            <p>Status: {order.status}</p>
            <OrderStatusBar orderStatus={order.status} />
            <DialogClose>
              <Button
                variant='outline'
                onClick={() => deleteOrder()}
              >
                Delete Order
              </Button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default OrderDialoge;