import { StarIcon } from '@heroicons/react/24/solid';
import './ProductCard.css';

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className='flex gap-1 justify-center rating'>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`w-4 h-4 ${
            index + 1 < rating ? 'text-yellow-400' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default Rating;
