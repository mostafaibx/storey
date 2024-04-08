import ProductsGrid from '@/components/Products/ProductsGrid/ProductsGrid';
import CategoriesBar from '@/components/Products/categoriesBar/CategoriesBar';

const StorePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <CategoriesBar />
      <ProductsGrid />
    </div>
  );
};

export default StorePage;
