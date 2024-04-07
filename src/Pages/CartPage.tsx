import CartTable from '@/components/Cart/CartTable';
import EmptyCart from '@/components/Cart/EmptyCart';
import OrderSummary from '@/components/Cart/OrderSummary';
import useCart from '@/composables/useCart';

const CartPage = () => {
  const { cart } = useCart();
  if (cart?.items.length === 0) return <EmptyCart />;

  return (
    <div className='flex md:flex-row flex-col h-screen w-screen'>
      <div className='w-full md:w-8/12 max-h-1/2 md:max-h-screen'>
        <CartTable />
      </div>
      <div className='w-full md:w-4/12 max-h-1/2 md:max-h-screen'>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
