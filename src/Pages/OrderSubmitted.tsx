import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';

const OrderSubmitted = () => {
  const { id } = useParams();

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <CheckBadgeIcon className='w-36 h-auto text-green-500' />
      <p className='text-2xl font-bold mb-16'>
        Your Order # {id} has been submitted
      </p>
    </div>
  );
};

export default OrderSubmitted;
