import {
  deleteAddressMutationFn,
  getUserAddressQueryFn,
  updateAddressMutationFn,
} from '@/api/address';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { adress } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// might implement Queue mutation & optimistic updates for offline mode

const useAddress = () => {
  const QueryClient = useQueryClient();
  const { data: addresses } = useQuery({
    queryKey: ['address'],
    queryFn: getUserAddressQueryFn,
    enabled: !!CookiesServices.get('jwt'),
  });
  const { mutate: updateAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (adress: adress) => updateAddressMutationFn(adress),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['address'] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Update failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Update failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });
  const { mutate: deleteAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (id: string) => deleteAddressMutationFn(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['address'] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Delete failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Delete failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });

  return { updateAddress, addresses, deleteAddress };
};

export default useAddress;
