import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Order } from '@/types/types';

const OrderDialoge = ({ order }: { order: Order }) => {
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>
            <p className='col-span-2'>Order number: {order.id}</p>
            <p>Date: {order.createdAt}</p>
            <p>Status: {order.status}</p>
            <Button variant='outline'>Delete Order</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default OrderDialoge;
