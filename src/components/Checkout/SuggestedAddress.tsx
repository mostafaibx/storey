const SuggestedAddress = ({
  locations,
  selectAddressHandler,
}: {
  locations: any;
  selectAddressHandler: (ad: any) => void;
}) => {
  return (
    <div>
      <p className='font-bold mt-4'>Suggested Addresses</p>
      <ul>
        {locations.map((ad) => (
          <li
            className='cursor-pointer my-2'
            key={ad.id}
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
