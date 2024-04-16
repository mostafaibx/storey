import { GeolocationResponse } from '@/types/types';

const SuggestedAddress = ({
  locations,
  selectAddressHandler,
}: {
  locations: GeolocationResponse[];
  selectAddressHandler: (ad: GeolocationResponse) => void;
}) => {
  return (
    <div>
      <p className='font-bold mt-4'>Suggested Addresses</p>
      <ul>
        {locations.map((ad: GeolocationResponse) => (
          <li
            className='cursor-pointer my-2'
            key={ad.place_id}
            onClick={() => selectAddressHandler(ad)}
          >
            - {ad.formatted_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedAddress;
