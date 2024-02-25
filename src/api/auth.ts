import { options } from '@/utils/auth';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';

export const loginMutationFn = async (userCredintials: any) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
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
      description: 'Login failed.',
    });
  }
  const data = await response.json();

  CookiesServices.set('jwt', data.jwt, options);
  toast({
    description: 'Login successful.',
  });
  return data;
};

export const signupMutationFn = async (userCredintials: any) => {
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
  const data = await response.json();

  CookiesServices.set('jwt', data.jwt, options);
  toast({
    description: 'Signup successful.',
  });
  return data;
};
