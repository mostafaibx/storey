import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { passwordChange } from '@/types/types';

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
      description: `something went wrong `,
      variant: 'destructive',
    });
  }
};

export const changePasswordMutationFn = async (passwords: passwordChange) => {
  console.log(passwords);
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/change-password`,
      {
        headers: {
          Authorization: `Bearer ${CookiesServices.get('jwt')}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(passwords),
      }
    );
    if (!res.ok) {
      throw new Error('Something went wrong. Please try again.');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    toast({
      description: `something went wrong `,
      variant: 'destructive',
    });
  }
};
