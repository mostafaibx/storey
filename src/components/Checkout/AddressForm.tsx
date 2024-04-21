import { useState } from 'react';
import { Button } from '../ui/button';
import { GeoLocationAddress, GeolocationResponse, adress } from '@/types/types';
import useAddress from '@/composables/useAddress';
import { getAddressValues, getLocation } from '@/utils/functions';
import SuggestedAddress from './SuggestedAddress';

// Explainaing what happens here!
//// The AddressForm is hidden by default.
//// When the user Selects the country the AddressForm is shown with the "showForm" set to true.
//// If the user chooses the Geolocation option, the suggested addresses are shown with the "suggestedAddress" set to true.
//// when the user selects one of the suggested addresses, the "selectedAddress" is set to the selected address & the "showForm" is set to false.
//// The selected address then will be the values of the form.

const AddressForm = ({
  closeAddAddressForm,
}: {
  closeAddAddressForm: () => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('DE');
  const [suggestedAddress, setSuggestedAddress] =
    useState<GeolocationResponse[]>();
  const [selectedAddress, setselectedAddress] = useState<GeoLocationAddress>();
  const { updateAddress } = useAddress();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const address: adress = {
      country: selectedCountry || selectedAddress?.country || 'DE',
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

  const getSelectedAddressHandler = (ad: GeolocationResponse) => {
    const address = getAddressValues(ad);
    setselectedAddress(address);
    setShowForm(true);
  };
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
      {!suggestedAddress && (
        <Button
          variant='outline'
          onClick={getLocationHandler}
        >
          Get Location
        </Button>
      )}
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
