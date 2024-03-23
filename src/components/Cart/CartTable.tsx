import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useCart from '@/composables/useCart';
import CartTableRow from './CartTableRow';
import { cartItem } from '@/types/types';

const CartTable = () => {
  const { cart } = useCart();

  return (
    <div>
      <div className='flex flex-row justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
        <h1>Your Shopping Cart</h1>
        <p>Items: {cart?.items.length}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'></TableHead>
            <TableHead>Your Item</TableHead>
            <TableHead>Quantaty</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart &&
            cart?.items.map((item: cartItem) => (
              <CartTableRow
                key={item.id}
                item={item}
              />
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
