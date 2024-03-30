import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AddressForm from './AddressForm';
import SelectAddress from './SelectAddress';
import useAddress from '@/composables/useAddress';
import { useState } from 'react';
import { Button } from '../ui/button';
import useCart from '@/composables/useCart';
import { Order, adress } from '@/types/types';
import useOrder from '@/composables/useOrder';

const AddAddressDialoge = () => {
  const [selectedAddress, setSelectedAddress] = useState<adress | null>(null);
  const { addresses } = useAddress();
  const { cart } = useCart();
  const { createOrder } = useOrder();

  const handleAddressChange = (addressId: adress) => {
    setSelectedAddress(addressId);
  };

  const submitAddressHandler = () => {
    if (selectedAddress) {
      const order: Order = {
        address: selectedAddress,
        items: cart?.items,
        total: cart?.total,
        status: 'pending',
        paymentMethod: 'cod',
      };
      createOrder(order);
    }
  };

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {addresses?.length <= 0
              ? 'Please Add your Address.'
              : 'Select your address.'}
          </DialogTitle>
          <DialogDescription>
            We need your address for delivery.
          </DialogDescription>
        </DialogHeader>
        {addresses?.length <= 0 ? (
          <AddressForm />
        ) : (
          <SelectAddress
            address={addresses}
            onAddressChange={handleAddressChange}
          />
        )}
        {selectedAddress && (
          <Button onClick={submitAddressHandler}>Continue</Button>
        )}
      </DialogContent>
    </div>
  );
};

export default AddAddressDialoge;
