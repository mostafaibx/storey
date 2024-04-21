import { toast } from '@/components/ui/use-toast';
import { adress } from '@/types/types';
import { fetchAuthHandler } from '@/utils/apiHelpers';

const baseUrl = import.meta.env.VITE_SERVER_URL;
const googleMapsApiURL =
  'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
export const getUserAddressQueryFn = async () => {
  try {
    const data = await fetchAuthHandler(`${baseUrl}/api/address`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast({
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        description: 'An unknown error occurred',
        variant: 'destructive',
      });
    }
  }
};

export const updateAddressMutationFn = async (adress: adress) => {
  const data = await fetchAuthHandler(`${baseUrl}/api/address`, 'POST', adress);

  return data;
};

export const deleteAddressMutationFn = async (id: string) => {
  await fetchAuthHandler(`${baseUrl}/api/address/${id}`, 'DELETE');
};

export const getAddressFromGoogle = async (lat: number, lng: number) => {
  const data = await fetchAuthHandler(
    `${googleMapsApiURL}${lat},${lng}&key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }`
  );

  if (data.results.length > 6) {
    const results = data.results.splice(0, 5);
    return results;
  } else {
    return data.results;
  }
};
