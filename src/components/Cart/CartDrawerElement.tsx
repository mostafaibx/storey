import { cartItem } from '@/types/types';
import { Button } from '../ui/button';
import useCart from '@/composables/useCart';
const CartDrawerElement = ({ item }: { item: cartItem }) => {
  const { removeFromCart } = useCart();

  return (
    <>
      <div className='flex justify-between px-6'>
        <div className='flex items-center'>
          <img
            src={item.thumbnail}
            className='px-2 w-16 h-auto bg-cover'
          />
          <p>{item.title}</p>
        </div>
        <p>Quantity: {item.quantity}</p>
        <p>price: {item.price}</p>
        <Button
          variant='destructive'
          size={'sm'}
          onClick={() => removeFromCart(item.id)}
        >
          X
        </Button>
      </div>
    </>
  );
};

export default CartDrawerElement;
