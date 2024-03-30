import useCart from '@/composables/useCart';
import { Button } from '../ui/button';
import AddAddressDialoge from '../Checkout/AddAddressDialoge';
import { cartTotal } from '@/utils/functions';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';

const OrderSummary = () => {
  const { cart } = useCart();

  return (
    <div className='flex flex-col justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
      <h1>Order Summary</h1>
      <p>Subtotal: {cart && cartTotal(cart?.items)}</p>
      <p>Shipping: Free</p>
      <p>Total: {cart && cartTotal(cart.items)}</p>
      <Dialog>
        <DialogTrigger>
          <Button>Checkout</Button>
        </DialogTrigger>
        <Button variant='outline'>Continue Shopping</Button>
        <AddAddressDialoge />
      </Dialog>
    </div>
  );
};

export default OrderSummary;
