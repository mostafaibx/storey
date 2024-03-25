import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { adress } from '@/types/types';

export const updateUserAddress = async (adress: adress) => {
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

export const getUserAddress = async () => {
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

export const deleteUserAddress = async (id: string) => {
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
