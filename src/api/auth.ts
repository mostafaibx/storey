import { options } from '@/utils/auth';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { loginCredentials, signupCredentials } from '@/types/types';
import { redirect } from 'react-router-dom';

export const loginMutationFn = async (userCredintials: loginCredentials) => {
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
    return;
  }
  const data = await response.json();

  CookiesServices.set('jwt', data.jwt, options);
  toast({
    description: 'Login successful.',
  });
  window.location.reload();
  return data;
};

export const signupMutationFn = async (userCredintials: signupCredentials) => {
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
