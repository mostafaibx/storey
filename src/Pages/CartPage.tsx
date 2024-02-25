import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const CartPage = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-gray-300 w-9/12 px-12'>
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
            <TableRow>
              <TableCell className='font-medium'>
                <img src='https://flowbite.com/docs/images/logo.svg' />
              </TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>
                <Button size={'sm'}>+</Button>1<Button size={'sm'}>-</Button>
              </TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>
                <img src='https://flowbite.com/docs/images/logo.svg' />
              </TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>
                <Button size={'sm'}>+</Button>1<Button size={'sm'}>-</Button>
              </TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>
                <img src='https://flowbite.com/docs/images/logo.svg' />
              </TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>
                <Button size={'sm'}>+</Button>1<Button size={'sm'}>-</Button>
              </TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className='bg-gray-500 w-3/12'>
        <div className='flex flex-row justify-between px-8 py-6 text-2xl font-semibold border-b-2 mx-8'>
          <h1>Order Summary</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
