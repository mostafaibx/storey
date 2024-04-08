import useCart from '@/composables/useCart';
import { Button } from '../ui/button';
import AddAddressDialoge from '../Checkout/AddAddressDialoge';
import { cartTotal, getLocation } from '@/utils/functions';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  const { cart } = useCart();

  return (
    <div className='flex flex-col justify-start items-center h-full mx-8 my-8 '>
      <h1 className='text-2xl font-semibold mb-6'>Cart Summary</h1>
      <div className='w-full text-lg'>
        <div className='flex justify-between my-2 mx-4'>
          <p>Subtotal:</p> <p> {cart && cartTotal(cart?.items)}</p>
        </div>
        <div className='flex justify-between my-2 mx-4'>
          <p>Shipping:</p> <p> Free</p>
        </div>
        <div className='flex justify-between my-2 mx-4'>
          <p>Total: </p> <p> {cart && cartTotal(cart.items)}</p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className='mt-4'>Checkout</Button>
        </DialogTrigger>
        <AddAddressDialoge />
      </Dialog>
      <Link to={'/'}>
        <Button
          variant='outline'
          className=' my-2'
        >
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default OrderSummary;
