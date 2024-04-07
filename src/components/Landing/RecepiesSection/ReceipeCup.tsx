type CoffeeReceipe = {
  name: string;
  color1: string;
  color2: string;
  color3: string;
};

const ReceipeCup = ({ coffee }: { coffee: CoffeeReceipe }) => {
  const size = {
    w: 32,
    h: 16,
    r: 4,
  };
  return (
    <div>
      <div
        className={`flex flex-col justify-end w-${size.w} h-${size.h} bg-white rounded-b-full border-2 border-white overflow-hidden relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg `}
      >
        <div className={`w-${size.w} h-${size.r} bg-${coffee.color3}`}></div>
        <div className={`w-${size.w} h-${size.r} bg-${coffee.color2}`}></div>
        <div className={`w-${size.w} h-${size.r} bg-${coffee.color1}`}></div>
      </div>
      <p className={`text-xl font-bold text-center`}>{coffee.name}</p>
    </div>
  );
};

export default ReceipeCup;
