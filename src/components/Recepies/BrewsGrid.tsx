import BrewCard from './BrewCard';

const receipiesData = [
  {
    name: 'MokaPot',
    image: 'moka',
    coffee: '1 gm',
    water: '16 ml',
    grind: 'Medium-Fine',
    heat: '99°C',
    time: '7 min',
  },
  {
    name: 'Coffee Dripper',
    image: 'moka',
    coffee: '1 gm',
    water: '16 ml',
    grind: 'Medium-Fine',
    heat: '94°C',
    time: '3-4 min',
  },
  {
    name: 'French Press',
    image: 'moka',
    coffee: '1 gm',
    water: '16 ml',
    grind: 'Medium-Coarse',
    heat: '90-96°C',
    time: '4 min',
  },
  {
    name: 'AeroPress',
    image: 'moka',
    coffee: '1 gm',
    water: '7 ml',
    grind: 'Fine',
    heat: '96°C',
    time: '2 min',
  },
  {
    name: 'Chemex',
    image: 'moka',
    coffee: '1 gm',
    water: '7 ml',
    grind: 'Medium',
    heat: '96°C',
    time: '4-5 min',
  },
  {
    name: 'Syphon',
    image: 'moka',
    coffee: '1 gm',
    water: '12 ml',
    grind: 'Fine',
    heat: '90°C',
    time: '6-7 min',
  },
];

const BrewsGrid = () => {
  return (
    <div className='flex flex-col'>
      <p className='text-3xl font-bold my-10'>Your Brews Guide</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {receipiesData.map((receipe) => (
          <BrewCard
            key={receipe.name}
            receipe={receipe}
          />
        ))}
      </div>
    </div>
  );
};

export default BrewsGrid;
