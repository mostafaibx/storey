import CartTable from '@/components/Cart/CartTable';
import OrderSummary from '@/components/Cart/OrderSummary';

const CartPage = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-amber-500 w-9/12 px-12 pt-20'>
        <CartTable />
      </div>
      <div className='bg-amber-900 w-3/12 pt-20'>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
