import { useState } from 'react';
import './SelectSize.css';

const SelectSize = () => {
  const [selectedSize, setSelectedSize] = useState(1);
  const selectSizeHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    setSelectedSize(parseInt(event.currentTarget.id));
  };
  return (
    <div>
      <ul className='flex gap-4 my-4'>
        <li
          className={`cursor-pointer ${selectedSize === 1 ? 'selected' : ''}`}
          id='1'
          onClick={selectSizeHandler}
        >
          100 gram
        </li>
        <li
          className={`cursor-pointer ${selectedSize === 2 ? 'selected' : ''}`}
          id='2'
          onClick={selectSizeHandler}
        >
          250 gram
        </li>
        <li
          className={`cursor-pointer ${selectedSize === 3 ? 'selected' : ''}`}
          id='3'
          onClick={selectSizeHandler}
        >
          500 gram
        </li>
      </ul>
    </div>
  );
};

export default SelectSize;
