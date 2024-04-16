import {
  deleteAddressMutationFn,
  getUserAddressQueryFn,
  updateAddressMutationFn,
} from '@/api/address';
import { adress } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// might implement Queue mutation & optimistic updates for offline mode

const useAddress = () => {
  const QueryClient = useQueryClient();
  const { data: addresses } = useQuery({
    queryKey: ['address'],
    queryFn: getUserAddressQueryFn,
  });
  const { mutate: updateAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (adress: adress) => updateAddressMutationFn(adress),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['address'] });
    },
  });
  const { mutate: deleteAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (id: string) => deleteAddressMutationFn(id),
  });

  return { updateAddress, addresses, deleteAddress };
};

export default useAddress;
