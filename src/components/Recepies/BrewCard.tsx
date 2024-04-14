import moka from '../../assets/mokapot-illustration.png';
import coffeeIcon from '../../assets/noun-coffee-bean-4052167.svg';
import waterIcon from '../../assets/noun-water-drop-6673522.svg';
import grinderIcon from '../../assets/noun-hand-coffee-grinder-1593025.svg';
import heatIcon from '../../assets/noun-heat-6757079.svg';
import clockIcon from '../../assets/noun-time-6759824.svg';

type Receipe = {
  name: string;
  image: string;
  coffee: string;
  water: string;
  grind: string;
  heat: string;
  time: string;
};

const BrewCard = ({ receipe }: { receipe: Receipe }) => {
  return (
    <div className='w-72 p-4 border-2 border-coffee-500 rounded-xl relative mx-10'>
      <p className='text-2xl font-bold mb-6'>{receipe.name}</p>
      <div className='flex justify-between items-center w-8/12 mb-6'>
        <div className='flex'>
          <img
            src={coffeeIcon}
            alt='coffee-icon'
            className='w-8 h-8'
          />
          <p>{receipe.coffee}</p>
        </div>
        <div className='flex'>
          <img
            src={waterIcon}
            alt='water-icon'
            className='w-8 h-8'
          />
          <p>{receipe.water}</p>
        </div>
      </div>
      <div className='flex'>
        <img
          src={grinderIcon}
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.grind}</p>
      </div>
      <div className='flex'>
        <img
          src={heatIcon}
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.heat}</p>
      </div>
      <div className='flex'>
        <img
          src={clockIcon}
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.time}</p>
      </div>
      <div className='absolute bottom-0 -right-14 bg-coffee-100'>
        <img
          src={moka}
          alt='moka'
          className='w-36 h-auto'
        />
      </div>
    </div>
  );
};

export default BrewCard;
