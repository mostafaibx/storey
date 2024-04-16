import { cartItem } from '@/types/types';
import { Button } from '../ui/button';

const CartItem = ({ item }: { item: cartItem }) => {
  return (
    <div className='flex justify-between items-center w-full h-24 my-2 border-b-2 border-coffee-300 '>
      <div className='flex w-auto h-20'>
        <div className='w-20 h-20 flex items-center justify-center'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className='w-auto max-h-20 bg-contain bg-center'
          />
        </div>
        <div className='ml-4'>
          <p className=' font-bold text-lg'>{item.title}</p>
          <p className='text-slate-500'>100 gm</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-start h-full py-2'>
        <p className='font-bold text-lg'>
          {item.price * (item.quantity || 1)} €
        </p>
        <p className='text-slate-500 text-sm italic font-semibold'>
          {item.price}€ x {item.quantity}
        </p>
      </div>
      <Button
        variant='outline'
        size={'sm'}
      >
        X
      </Button>
    </div>
  );
};

export default CartItem;
