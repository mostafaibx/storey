import { Order } from '@/types/types';
import { Button } from '../ui/button';
import { DialogTrigger } from '../ui/dialog';

type OrderItemProps = {
  order: Order;
  onOpen: (Order: Order) => void;
};

const OrderItem = ({ order, onOpen }: OrderItemProps) => {
  return (
    <div className='bg-yellow-300 bg-opacity-80 w-full h-20 px-4 my-2 grid grid-cols-4 grid-rows-2 items-center rounded-xl'>
      <p className='col-span-2'>Order number: {order.id}</p>
      <p>Date: {order.createdAt}</p>
      <p>Status: {order.status}</p>
      <DialogTrigger>
        <Button
          variant='outline'
          onClick={() => onOpen(order)}
        >
          Check Order
        </Button>
      </DialogTrigger>
    </div>
  );
};

export default OrderItem;
