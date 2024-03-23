import {
  deleteUserAddress,
  getUserAddress,
  updateUserAddress,
} from '@/api/address';
import { adress } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useAddress = () => {
  const QueryClient = useQueryClient();
  const { data: addresses } = useQuery({
    queryKey: ['address'],
    queryFn: getUserAddress,
  });
  const { mutate: updateAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (adress: adress) => updateUserAddress(adress),
    onSuccess: () => {
      QueryClient.invalidateQueries('address');
    },
  });
  const { mutate: deleteAddress } = useMutation({
    mutationKey: ['address'],
    mutationFn: (id: string) => deleteUserAddress(id),
  });

  return { updateAddress, addresses, deleteAddress };
};

export default useAddress;
