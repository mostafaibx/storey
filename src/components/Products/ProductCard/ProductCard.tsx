import { Button } from '../../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import { textSlicer } from '../../../utils/functions';
import useCartMutation from '@/composables/useCartMutation';

type Product = {
  createdAt: string;
  description: string;
  pid: string;
  price: number;
  publishedAt: string;
  rating: number; // TODO: change it into object with number of rates and average rate
  stock: number;
  title: string;
  updatedAt: string;
  thumbnail: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

const ProductCard = ({ product }: { product: Product }) => {
  const { mutate } = useCartMutation();

  const addToCartHandler = () => {
    mutate(product);
  };

  return (
    <Card className='w-60 h-96'>
      <CardHeader>
        <img
          className='w-full h-36 rounded-t-xl object-cover'
          src={`${import.meta.env.VITE_SERVER_URL}${
            product?.thumbnail?.data?.attributes?.url
          }`}
        ></img>
        <CardTitle>{textSlicer(product.title, 23)}</CardTitle>
        <CardDescription>{textSlicer(product.description, 45)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
      </CardContent>
      <CardFooter className='justify-between'>
        <Button>BUY NOW</Button>
        <Button onClick={addToCartHandler}>TO CART</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
