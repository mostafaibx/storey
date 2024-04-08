const CategoriesBar = () => {
  const categories = [
    'All',
    'Coffee',
    'Mugs',
    'Capsules',
    'Mokapots',
    'French Press',
    'Accessories',
    'Cups',
    'Coffe Makers',
  ];
  return (
    <div className='flex gap-4 overflow-x-scroll w-full mx-4 my-12'>
      {categories.map((category) => (
        <div className='px-4 py-2 bg-coffee-500 rounded-xl text-coffee-100 hover:text-white hover:bg-coffee-400 transition-all duration-300 cursor-pointer'>
          <p className='text-md md:text-lg font-semibold text-nowrap'>
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
