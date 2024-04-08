import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { adress } from '@/types/types';

export const getUserAddressQueryFn = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/address`, {
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

export const updateAddressMutationFn = async (adress: adress) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/address`, {
      headers: {
        Authorization: `Bearer ${CookiesServices.get('jwt')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(adress),
    });
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();
    toast({
      description: 'Address updated',
      variant: 'default',
    });
    return data;
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};

export const deleteAddressMutationFn = async (id: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/address/${id}`,
      {
        headers: {
          Authorization: `Bearer ${CookiesServices.get('jwt')}`,
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      }
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};

export const getAddressFromGoogle = async (lat: number, lng: number) => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC0peVZvyjbG8UGm4xTGp_CPXjh4mGRqPg`
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();

    if (data.results.length > 6) {
      const results = data.results.splice(0, 5);
      return results;
    } else {
      return data.results;
    }
  } catch (error) {
    toast({
      description: `${error.message}`,
      variant: 'destructive',
    });
  }
};
