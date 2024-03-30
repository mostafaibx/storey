import CartTable from '@/components/Cart/CartTable';
import EmptyCart from '@/components/Cart/EmptyCart';
import OrderSummary from '@/components/Cart/OrderSummary';
import useCart from '@/composables/useCart';

const CartPage = () => {
  const { cart } = useCart();
  if (cart?.items.length === 0) return <EmptyCart />;

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
