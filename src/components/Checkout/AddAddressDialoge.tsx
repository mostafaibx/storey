import {
  Dialog,
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
import { useNavigate } from 'react-router-dom';
import useOrder from '@/composables/useOrder';

const AddAddressDialoge = ({ openDialog }: { openDialog: boolean }) => {
  const { addresses } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState<adress | null>(null);

  const handleAddressChange = (addressId: adress) => {
    setSelectedAddress(addressId);
  };

  const { cart } = useCart();
  const navigate = useNavigate();
  const { createOrder } = useOrder();
  const submitAddressHandler = () => {
    if (selectedAddress) {
      const order: Order = {
        address: selectedAddress,
        items: cart?.items,
        total: cart?.total,
        date: new Date(),
        status: 'pending',
        paymentMethod: 'cod',
      };
      createOrder(order);
      // TODO: Send order to server
      // if res is ok navigate to checkout
      navigate('/checkout');
    }
  };

  return (
    <div>
      <Dialog open={openDialog}>
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
      </Dialog>
    </div>
  );
};

export default AddAddressDialoge;
