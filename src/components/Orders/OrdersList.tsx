import OrderItem from './OrderItem';

const OrdersList = () => {
  return (
    <div className='flex flex-col w-screen h-full px-8'>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};

export default OrdersList;
