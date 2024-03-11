import { toast } from '@/components/ui/use-toast';

export const getAllProducts = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
  );
  if (!res.ok) {
    toast({
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  }
  const data = await res.json();
  return data;
};
