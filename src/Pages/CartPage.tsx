import CartTable from '@/components/Cart/CartTable';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import useCart from '@/composables/useCart';
import { cartItem } from '@/types/types';

const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-amber-500 w-9/12 px-12 pt-20'>
        <div className='flex flex-row justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
          <h1>Your Shopping Cart</h1>
          <p>Items: 4</p>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Quantaty</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart &&
              cart?.items.map((item: cartItem) => (
                <CartTable
                  key={item.pid}
                  item={item}
                />
              ))}
          </TableBody>
        </Table>
      </div>
      <div className='bg-amber-900 w-3/12 pt-20'>
        <div className='flex flex-row justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
          <h1>Order Summary</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
