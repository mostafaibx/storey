import { passwordChange } from '@/types/types';
import { fetchHandler } from '@/utils/apiHelpers';

export const getUserData = async () => {
  const data = await fetchHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/users/me`
  );
  return data;
};

export const changePasswordMutationFn = async (passwords: passwordChange) => {
  const data = await fetchHandler(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/change-password`,
    'POST',
    passwords
  );

  return data;
};
