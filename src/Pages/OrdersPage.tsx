import OrdersList from '@/components/Orders/OrdersList';

const OrdersPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-48 my-10'>
      <p className='text-3xl font-bold mb-16'>Your Orders</p>
      <OrdersList />
    </div>
  );
};

export default OrdersPage;
