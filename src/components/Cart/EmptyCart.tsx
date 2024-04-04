import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const EmptyCart = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <p className='text-3xl font-bold my-10'>Your cart is empty</p>
      <Link to={'/'}>
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
