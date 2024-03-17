import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';

export const getUserData = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${CookiesServices.get('jwt')}`,
        'Content-Type': 'application/json',
      },
    });
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
