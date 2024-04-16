const bean1 =
  import.meta.env.VITE_CLOUDINARY_BASE_URL + '/v1713277469/bean1_e9rwuf.png';
const bean2 =
  import.meta.env.VITE_CLOUDINARY_BASE_URL + '/v1713277472/bean2_yhtgab.png';
const bean3 =
  import.meta.env.VITE_CLOUDINARY_BASE_URL + '/v1713277469/bean3_fi4wtq.png';

import './CoffeeBeans.css';

const CoffeeBeans = () => {
  const REPEATED = 6;
  const INCREMENT_TOP = 0;
  const INCREMENT_LEFT = 25;
  const RANDOM_OFFSET_RANGE = 20;
  const basePositions = [
    { top: '30%', left: '5%' },
    { top: '45%', left: '10%' },
    { top: '60%', left: '24%' },
  ];
  const getRandomOffset = () =>
    Math.random() * RANDOM_OFFSET_RANGE - RANDOM_OFFSET_RANGE / 2;

  return (
    <>
      {basePositions.map((basePosition, index) => {
        const beans = Array(REPEATED)
          .fill(0)
          .map((_, idx) => ({
            top: `${
              parseInt(basePosition.top) +
              idx * INCREMENT_TOP +
              getRandomOffset()
            }%`,
            left: `${
              parseInt(basePosition.left) +
              idx * INCREMENT_LEFT +
              getRandomOffset()
            }%`,
          }));

        return beans.map((position, idx) => {
          const beanImage = index === 0 ? bean1 : index === 1 ? bean2 : bean3;
          const imageSizeClass =
            index === 0
              ? 'w-8 md:w-14 xl:w-20'
              : index === 1
              ? 'w-14 md:w-24 xl:w-32'
              : 'w-14 md:w-24 xl:w-32';

          return (
            <img
              key={`${index}-${idx}`}
              src={beanImage}
              className={`coffee-bean absolute h-auto ${imageSizeClass}`}
              style={{ top: position.top, left: position.left }}
              alt={`Bean ${index + 1}`}
            />
          );
        });
      })}
    </>
  );
};

export default CoffeeBeans;
