import ReceipeCup from './ReceipeCup';

const ReceipiesSection = () => {
  const coffees = [
    {
      name: 'Espresso',
      color1: 'coffee-500',
      color2: 'transparent',
      color3: 'transparent',
    },
    {
      name: 'Doppio',
      color1: 'coffee-500',
      color2: 'coffee-500',
      color3: 'transparent',
    },
    {
      name: 'Cappuccino',
      color1: 'coffee-500',
      color2: 'coffee-200',
      color3: 'coffee-200',
    },
    {
      name: 'Latte',
      color1: 'coffee-200',
      color2: 'coffee-200',
      color3: 'coffee-500',
    },
    {
      name: 'Flat White',
      color1: 'coffee-500',
      color2: 'coffee-500',
      color3: 'coffee-200',
    },
    {
      name: 'Americano',
      color1: 'coffee-500',
      color2: 'blue-500',
      color3: 'blue-500',
    },
    {
      name: 'Mocha',
      color1: 'coffee-500',
      color2: 'amber-900',
      color3: 'coffee-200',
    },
  ];

  return (
    <div className=' h-full flex flex-col justify-center items-center mb-24'>
      <p className='text-4xl font-extrabold mb-2'>Our Coffee Guide </p>
      <p className='text-lg font-semibold  mb-16'>Be your own barista </p>
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {coffees.map((coffee) => (
          <ReceipeCup
            key={coffee.name}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default ReceipiesSection;
