import { Order } from '@/types/types';
import { Button } from '../ui/button';
import { DialogTrigger } from '../ui/dialog';
import { formatDateAndTime } from '@/utils/functions';

type OrderItemProps = {
  order: Order;
  onOpen: (Order: Order) => void;
};

const OrderItem = ({ order, onOpen }: OrderItemProps) => {
  return (
    <div className={`border-2 border-green-500 p-1 rounded-xl my-2`}>
      <div className='bg-white bg-opacity-80 w-full h-full md:h-20 px-4 grid grid-cols-1 md:grid-cols-3  grid-rows-3 md:grid-rows-2 items-center rounded-xl'>
        <p className='md:col-span-2'>
          <strong>Order number:</strong> {order.number}
        </p>
        <p>
          <strong>Date:</strong> {formatDateAndTime(order.createdAt || '')}
        </p>
        <p className=''>
          <strong>Status:</strong> {order.status}
        </p>
        <DialogTrigger className='md:col-end-4 justify-items-end'>
          <Button
            variant='outline'
            onClick={() => onOpen(order)}
          >
            Check Order
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default OrderItem;
