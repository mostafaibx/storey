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
import { generateOrderNumber } from '@/utils/functions';

const AddAddressDialoge = () => {
  const [selectedAddress, setSelectedAddress] = useState<adress | null>(null);
  const [newAddress, setNewAddress] = useState<boolean>(false);
  const { addresses } = useAddress();
  const { cart } = useCart();
  const { createOrder } = useOrder();

  const handleAddressChange = (addressId: adress) => {
    setSelectedAddress(addressId);
  };

  const addNewAddressHandler = () => {
    setNewAddress(true);
  };

  const submitAddressHandler = () => {
    if (!selectedAddress) return;

    const order: Order = {
      number: generateOrderNumber(),
      address: selectedAddress,
      items: cart?.items,
      total: cart?.total,
      status: 'pending',
      paymentMethod: 'cod',
    };
    createOrder(order);
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
        {addresses?.length <= 0 || newAddress ? (
          <AddressForm closeAddAddressForm={() => setNewAddress(false)} />
        ) : (
          !newAddress && (
            <>
              <SelectAddress
                address={addresses}
                onAddressChange={handleAddressChange}
              />
              <Button onClick={addNewAddressHandler}>Add New Address</Button>
            </>
          )
        )}

        <Button
          onClick={submitAddressHandler}
          disabled={!selectedAddress}
        >
          Continue
        </Button>
      </DialogContent>
    </div>
  );
};

export default AddAddressDialoge;
