import useOrder from '@/composables/useOrder';
import OrderItem from './OrderItem';
import { Order } from '@/types/types';
import OrderDialoge from './OrderDialoge';
import { useState } from 'react';
import { Dialog } from '@radix-ui/react-dialog';

const OrdersList = () => {
  const [selectedOrder, setSelectedOrder] = useState({} as Order);
  const { orders } = useOrder();
  const openOrderDetailsHandler = (order: Order) => {
    setSelectedOrder(order);
  };

  return (
    <div className='flex flex-col w-screen h-full px-8'>
      <Dialog>
        {orders?.map((order: Order) => (
          <OrderItem
            key={order.id}
            order={order}
            onOpen={openOrderDetailsHandler}
          />
        ))}
        <OrderDialoge order={selectedOrder} />
      </Dialog>
    </div>
  );
};

export default OrdersList;
