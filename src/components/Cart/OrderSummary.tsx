import useCart from '@/composables/useCart';
import { cartItem } from '@/types/types';
import { Button } from '../ui/button';
import AddAddressDialoge from '../Checkout/AddAddressDialoge';
import { useState } from 'react';
import useUser from '@/composables/useUser';

const OrderSummary = () => {
  /*   const { cart } = useCart();

  const cartTotal = (items: cartItem[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  }; */
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='flex flex-col justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
      <h1>Order Summary</h1>
      <p>Subtotal:</p>
      <p>Shipping: Free</p>
      <p>Total: </p>
      <Button onClick={() => setOpenDialog(true)}>Checkout</Button>
      <Button variant='outline'>Continue Shopping</Button>
      <AddAddressDialoge openDialog={openDialog} />
    </div>
  );
};

export default OrderSummary;
