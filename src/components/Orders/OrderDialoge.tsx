import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Order } from '@/types/types';
import useOrder from '@/composables/useOrder';
import { Link } from 'react-router-dom';

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
            <DialogClose disabled={order.status !== 'pending'}>
              <Button
                disabled={order.status !== 'pending'}
                variant='outline'
                onClick={() => deleteOrder()}
              >
                Delete Order
              </Button>
            </DialogClose>
            {order.status === 'pending' && (
              <Link to={`/checkout/${order.number}`}>
                <Button variant='outline'>Go to Checkout</Button>
              </Link>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default OrderDialoge;
