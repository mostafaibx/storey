import { useState } from 'react';
import { Button } from '../ui/button';
import { adress } from '@/types/types';
import useAddress from '@/composables/useAddress';

const AddressForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const { updateAddress } = useAddress();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const address: adress = {
      country: selectedCountry,
      street: (event.target as HTMLFormElement)['street'].value,
      plz: (event.target as HTMLFormElement)['plz'].value,
      city: (event.target as HTMLFormElement)['city'].value,
    };
    updateAddress(address);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
    setShowForm(newCountry !== '');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
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
        <div className={` flex-col ${showForm ? 'flex' : 'hidden'}`}>
          <label htmlFor='street'>Straße und Hausnummer:</label>
          <input
            type='text'
            id='street'
            name='street'
            required
            placeholder='z.B. Musterstraße 12'
            autoComplete='street-address'
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
          />

          <label htmlFor='city'>Ort:</label>
          <input
            type='text'
            id='city'
            name='city'
            required
            placeholder='Name der Stadt'
            autoComplete='address-level2'
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default AddressForm;
