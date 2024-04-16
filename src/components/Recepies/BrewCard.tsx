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
            src={
              import.meta.env.VITE_CLOUDINARY_BASE_URL +
              '/v1713274730/noun-coffee-bean-4052167_jk6jjs.svg'
            }
            alt='coffee-icon'
            className='w-8 h-8'
          />
          <p>{receipe.coffee}</p>
        </div>
        <div className='flex'>
          <img
            src={
              import.meta.env.VITE_CLOUDINARY_BASE_URL +
              '/v1713274732/noun-water-drop-6673522_szbhxu.svg'
            }
            alt='water-icon'
            className='w-8 h-8'
          />
          <p>{receipe.water}</p>
        </div>
      </div>
      <div className='flex'>
        <img
          src={
            import.meta.env.VITE_CLOUDINARY_BASE_URL +
            '/v1713274731/noun-hand-coffee-grinder-1593025_yoklp5.svg'
          }
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.grind}</p>
      </div>
      <div className='flex'>
        <img
          src={
            import.meta.env.VITE_CLOUDINARY_BASE_URL +
            '/v1713274731/noun-heat-6757079_vu1pou.svg'
          }
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.heat}</p>
      </div>
      <div className='flex'>
        <img
          src={
            import.meta.env.VITE_CLOUDINARY_BASE_URL +
            '/v1713274731/noun-time-6759824_soxihx.svg'
          }
          alt='water-icon'
          className='w-8 h-8'
        />
        <p>{receipe.time}</p>
      </div>
      <div className='absolute bottom-0 -right-14 bg-coffee-100'>
        <img
          src={import.meta.env.VITE_CLOUDINARY_BASE_URL + receipe.image}
          alt={receipe.name}
          className='w-36 h-auto'
        />
      </div>
    </div>
  );
};

export default BrewCard;
