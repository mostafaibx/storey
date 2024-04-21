import useCart from '@/composables/useCart';
import { cartItem } from '@/types/types';
import CartItem from './CartItem';

const CartTable = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1 className=' text-2xl md:text-4xl font-semibold mx-12'>Your Cart</h1>
      <div className='px-4 md:px-0 md:my-16 md:ml-20'>
        {cart &&
          cart.items.map((item: cartItem) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
      </div>
    </div>
  );
};

export default CartTable;
