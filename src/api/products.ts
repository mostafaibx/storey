import { toast } from '@/components/ui/use-toast';

export const getAllProductsQueryFn = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};
export const getSortedProductsQueryFn = async (sort: string) => {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/products?populate=thumbnail&sort=${sort}`
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};
export const getSelectedProductQueryFn = async (id: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/products/${id}?populate=thumbnail`
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};
