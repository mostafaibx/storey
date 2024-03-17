import { options } from '@/utils/auth';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { loginCredentials, signupCredentials } from '@/types/types';

// need to handle errors better

export const loginMutationFn = async (userCredentials: loginCredentials) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      const error = data.error;
      throw new Error(error.message);
    } else {
      CookiesServices.set('jwt', data.jwt, options);
      toast({
        description: 'Login successful.',
      });
      window.location.reload();
      return data;
    }
  } catch (error) {
    toast({
      description: 'Login failed: ' + error.message,
      variant: 'destructive',
    });
  }
};

export const signupMutationFn = async (userCredintials: signupCredentials) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/local/register `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredintials),
      }
    );

    if (!response.ok) {
      toast({
        description: 'Signup failed.',
        variant: 'destructive',
      });
    }
    const data = await response.json();
    if (!response.ok) {
      const error = data.error;
      throw new Error(error.message);
    } else {
      CookiesServices.set('jwt', data.jwt, options);
      toast({
        description: 'Signup successful.',
      });
      window.location.reload();
      return data;
    }
  } catch (error) {
    toast({
      description: 'Login failed: ' + error.message,
      variant: 'destructive',
    });
  }
};
