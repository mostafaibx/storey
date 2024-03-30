import { adress } from '@/types/types';

type SelectAddressProps = {
  address: adress[];
  onAddressChange: (selectedAddress: adress) => void;
};

const SelectAddress = ({ address, onAddressChange }: SelectAddressProps) => {
  const handleAddressChange = (address: adress) => {
    onAddressChange(address);
  };

  return (
    <div>
      <form>
        {address.map((address) => (
          <div key={address.id}>
            <input
              name='address'
              type='radio'
              value={address.id}
              onChange={() => handleAddressChange(address)}
            />
            <label>{`${address.street} ${address.plz} ${address.city}`}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SelectAddress;
