import ProductPreview from '@/components/Product/ProductPreview';
import useProductsQuery from '@/composables/useProducts';
import { useParams } from 'react-router-dom';
import LoadingPage from './LoadingPage';

const ProductPage = () => {
  const { id } = useParams();

  const { selectedProduct, isSelectedProductLoading } = useProductsQuery({
    id: id,
  });

  if (isSelectedProductLoading) {
    return <LoadingPage />;
  } else {
    return (
      <div className='flex justify-start items-top relative'>
        <ProductPreview product={selectedProduct?.data?.attributes} />
      </div>
    );
  }
};

export default ProductPage;
