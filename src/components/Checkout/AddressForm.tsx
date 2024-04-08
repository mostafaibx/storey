import { useState } from 'react';
import { Button } from '../ui/button';
import { adress } from '@/types/types';
import useAddress from '@/composables/useAddress';
import { getAddressValues, getLocation } from '@/utils/functions';
import SuggestedAddress from './SuggestedAddress';

const AddressForm = ({
  closeAddAddressForm,
}: {
  closeAddAddressForm: () => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [suggestedAddress, setSuggestedAddress] = useState('');
  const [selectedAddress, setselectedAddress] = useState('');
  const { updateAddress } = useAddress();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const address: adress = {
      country: selectedCountry || selectedAddress?.country,
      street: (event.target as HTMLFormElement)['street'].value,
      plz: (event.target as HTMLFormElement)['plz'].value,
      city: (event.target as HTMLFormElement)['city'].value,
    };
    updateAddress(address);
    closeAddAddressForm();
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
    setShowForm(newCountry !== '');
  };

  const getLocationHandler = async () => {
    const locations = await getLocation();
    setSuggestedAddress(locations);
  };

  const getSelectedAddressHandler = (ad: any) => {
    const address = getAddressValues(ad);
    setselectedAddress(address);
    setShowForm(true);
  };
  console.log(selectedAddress);
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {!selectedAddress && (
          <>
            <label htmlFor='country'>Choose your Country:</label>
            <select
              id='country'
              name='contry'
              onChange={handleCountryChange}
            >
              <option value=''>Please Select...</option>
              <option value='DE'>Germany</option>
              <option value='NL'>Netherlands</option>
              <option value='ITL'>Italy</option>
            </select>
          </>
        )}
        <div className={` flex-col ${showForm ? 'flex' : 'hidden'}`}>
          <label htmlFor='street'>Straße und Hausnummer:</label>
          <input
            type='text'
            id='street'
            name='street'
            required
            placeholder='z.B. Musterstraße 12'
            autoComplete='street-address'
            value={selectedAddress?.streetName}
          />

          <label htmlFor='plz'>PLZ:</label>
          <input
            type='text'
            id='plz'
            name='plz'
            required
            pattern='[0-9]{5}'
            placeholder='Postleitzahl'
            autoComplete='postal-code'
            value={selectedAddress?.plz}
          />

          <label htmlFor='city'>Ort:</label>
          <input
            type='text'
            id='city'
            name='city'
            required
            placeholder='Name der Stadt'
            autoComplete='address-level2'
            value={selectedAddress?.locality}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
      <Button
        variant='outline'
        onClick={getLocationHandler}
      >
        Get Location
      </Button>
      {!selectedAddress && (
        <>
          {suggestedAddress && (
            <SuggestedAddress
              locations={suggestedAddress}
              selectAddressHandler={getSelectedAddressHandler}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AddressForm;
