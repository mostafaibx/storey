import { cartItem } from '@/types/types';
import { TableCell, TableRow } from '../ui/table';

const CartTable = ({ item }: { item: cartItem }) => {
  return (
    <>
      <TableRow>
        <TableCell className='font-medium'>
          <img
            className='w-16 h-auto bg-cover rounded-lg'
            src={`${import.meta.env.VITE_SERVER_URL}${item.thumbnail}`}
          />
        </TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell>1</TableCell>
        <TableCell className='text-right'>$ {item.price}</TableCell>
      </TableRow>
    </>
  );
};

export default CartTable;
