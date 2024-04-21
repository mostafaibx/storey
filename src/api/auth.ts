import { options } from '@/utils/auth';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { loginCredentials, signupCredentials } from '@/types/types';
import { fetchUnAuthHandler } from '@/utils/apiHelpers';

export const loginMutationFn = async (userCredentials: loginCredentials) => {
  const data = await fetchUnAuthHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
    'POST',
    userCredentials
  );
  console.log(data);
  if (data) {
    CookiesServices.set('jwt', data.jwt, options);
    toast({
      description: 'Login successful.',
    });
  }
};

export const signupMutationFn = async (userCredintials: signupCredentials) => {
  const data = await fetchUnAuthHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/local/register`,
    'POST',
    userCredintials
  );

  if (data) {
    CookiesServices.set('jwt', data.jwt, options);
    toast({
      description: 'Signup successful.',
    });
  }
};

export const loginWithProvider = async (token: string, provider: string) => {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/auth/${provider}/callback?access_token=${token}`
    );
    const data = await res.json();
    if (!res.ok) {
      const error = data.error;
      throw new Error(error.message);
    } else {
      CookiesServices.set('jwt', data.jwt, options);
      toast({
        description: 'Signup successful.',
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      toast({
        description: 'Login failed: ' + error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        description: 'Login failed: An unknown error occurred',
        variant: 'destructive',
      });
    }
  }
};
