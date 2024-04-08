const SuggestedAddress = ({
  locations,
  selectAddressHandler,
}: {
  locations: any;
  selectAddressHandler: (ad: any) => void;
}) => {
  return (
    <div>
      <ul>
        {locations.map((ad) => (
          <li
            key={ad.id}
            onClick={() => selectAddressHandler(ad)}
          >
            {ad.formatted_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedAddress;
