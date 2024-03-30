import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const EmptyCart = () => {
  return (
    <div className='flex h-screen justify-center items-center pt-20'>
      {' '}
      <p>Your cart is empty</p>
      <Link to={'/'}>
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
