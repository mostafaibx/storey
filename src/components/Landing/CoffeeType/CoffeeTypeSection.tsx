import arabiaca from '../../../assets/arabica-bean.png';
import robosto from '../../../assets/robosto-bean.png';

const CoffeeTypeSection = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex items-center'>
        <div className='flex flex-col justify-between items-center'>
          <p className='text-4xl font-bold'>Arabica</p>
          <img
            src={arabiaca}
            className='w-48 h-auto'
          />
        </div>
        <div className='flex flex-col justify-between items-end h-36 w-80 text-xl'>
          <p>
            <strong>Aromatic notes:</strong> Delicate, Sweet, Complex, and
            acidulous
          </p>
          <p>
            <strong>Origin:</strong> Yemen
          </p>
          <p>
            <strong>Caffine:</strong> Moderate
          </p>
        </div>
      </div>
      <div className='ml-70 flex flex-row-reverse items-center'>
        <div className='flex flex-col justify-between items-center'>
          <p className='text-4xl font-bold'>Robusta</p>
          <img
            src={robosto}
            className='w-48  h-auto'
          />
        </div>
        <div className='flex flex-col justify-between items-start h-36 w-80 text-xl'>
          <p>Aromatic notes: Strong, Earthy, Woody, and Bitter</p>
          <p>Origin: Africa</p>
          <p>Caffine: High</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTypeSection;
