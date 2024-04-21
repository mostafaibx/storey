import { passwordChange } from '@/types/types';
import { fetchAuthHandler } from '@/utils/apiHelpers';

export const getUserData = async () => {
  const data = await fetchAuthHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/users/me`
  );
  return data;
};

export const changePasswordMutationFn = async (passwords: passwordChange) => {
  const data = await fetchAuthHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/change-password`,
    'POST',
    passwords
  );

  return data;
};
