import useCart from '@/composables/useCart';
import { Button } from '../ui/button';
import AddAddressDialoge from '../Checkout/AddAddressDialoge';
import { useState } from 'react';
import { toast } from '../ui/use-toast';
import { cartTotal } from '@/utils/functions';

const OrderSummary = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const { cart } = useCart();

  const checkOutHandler = () => {
    if (cart?.items.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart',
        variant: 'destructive',
      });
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <div className='flex flex-col justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
      <h1>Order Summary</h1>
      <p>Subtotal: {cart && cartTotal(cart?.items)}</p>
      <p>Shipping: Free</p>
      <p>Total: {cart && cartTotal(cart.items)}</p>
      <Button onClick={checkOutHandler}>Checkout</Button>
      <Button variant='outline'>Continue Shopping</Button>
      <AddAddressDialoge openDialog={openDialog} />
    </div>
  );
};

export default OrderSummary;
