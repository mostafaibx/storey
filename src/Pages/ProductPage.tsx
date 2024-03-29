import useProductsQuery from '@/composables/useProducts';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  const { selectedProduct } = useProductsQuery(id);
  console.log(selectedProduct);
  return (
    <div className='flex h-screen justify-center items-center pt-20'></div>
  );
};

export default ProductPage;
