import { Button } from '../ui/button';

const OrderItem = () => {
  return (
    <div className='bg-yellow-300 bg-opacity-80 w-full h-20 px-4 my-2 grid grid-cols-4 grid-rows-2 items-center rounded-xl'>
      <p className='col-span-2'>Order number: 12339020ß2ß2ß</p>
      <p>Date: 12.12.2022</p>
      <p>Status: Pending</p>
      <p className='col-span-2'>Shipping Address: Zum heckplatz 4, Soest</p>
      <p>Payment Method: Credit Card</p>
      <Button variant='outline'>Check Items</Button>
    </div>
  );
};

export default OrderItem;
