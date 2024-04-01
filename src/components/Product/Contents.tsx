import './Contents.css';

const Contents = () => {
  return (
    <div className='mx-8'>
      <p className='text-xl font-extrabold'>Contents:</p>
      <div className='text-lg contents-menue relative'>
        <ul className='flex flex-col gap-2'>
          <li className='content-item'>30% Arabiaca</li>
          <li className='content-item'>70% Robosto</li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
