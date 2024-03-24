import { useState } from 'react';
import chip from '@/assets/chip.png';
import './checkout.css';
import visa from '@/assets/visa.png';
import mastercard from '@/assets/mastercard.png';
import useCart from '@/composables/useCart';
import { useNavigate } from 'react-router-dom';
type CardType = {
  name: string;
  pattern: RegExp;
};

const CARD_TYPES: CardType[] = [
  {
    name: 'Visa',
    pattern: /^4[0-9]{3}$/,
  },
  { name: 'Mastercard', pattern: /^5[1-5][0-9]{2}$/ },
  { name: 'American Express', pattern: /^3[47][0-9]{13}$/ },
];

const CreditCardForm = () => {
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState<string | null>(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(.{4})/g, '$1 ');

    setCardNumber(formattedValue.slice(0, 19));
    const matchedType = CARD_TYPES.find((type) =>
      type.pattern.test(value.slice(0, 4))
    );
    setCardType(matchedType?.name || null);
    console.log(matchedType);
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(.{2})/g, '$1/');
    setExpiryDate(formattedValue.slice(0, 5));
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setCvv(value.slice(0, 3));
  };

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/[^\w\s]/g, '');
    setCardHolderName(value);
  };

  const isFormValid = () => {
    // Implement validation logic here
    return cardNumber.length > 0 && expiryDate.length > 0 && cvv.length > 0;
  };
  const { clearCart } = useCart();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log('Form submitted:', { cardNumber, expiryDate, cvv });
      clearCart();
      navigate('/ordersubmitted/132ßß293444343049309');
    } else {
      console.error('Form validation failed');
    }
  };

  return (
    <div className='container flex mx-auto px-4 py-8'>
      <div className='w-1/2 flex justify-center items-center'>
        <div className='credit-card-div'>
          <img
            src={chip}
            alt='chip'
            className='w-8 lg:w-10 h-auto ml-8 mt-20'
          />
          <img
            src={cardType === 'Mastercard' ? mastercard : visa}
            alt='card type'
            className='w-20 h-auto ml-12 '
          />
          <p className='text-white text-lg lg:text-xl font-bold h-6 col-span-2 mt-12 mx-6 tracking-widest'>
            {cardNumber || '1234 5678 1234 5678'}
          </p>
          <p className='text-white text-lg font-bold h-6 mt-3 ml-4'>
            {cardHolderName || 'John Smith'}
          </p>
          <p className='text-white text-lg font-bold h-6 mt-3 '>
            {expiryDate || '02/25'}
          </p>
        </div>
      </div>
      <div className='w-1/2 px-20'>
        <p className='text-3xl font-bold mb-4 text-center'>Payment Details</p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center'
        >
          <label
            htmlFor='cardNumber'
            className='checkout-label'
          >
            Card Holder:
          </label>
          <input
            type='text'
            id='cardHolderName'
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            placeholder='John Smith'
            className='checkout-input'
            required
          />
          <label
            htmlFor='cardNumber'
            className='checkout-label'
          >
            Card Number:
          </label>
          <input
            type='text'
            id='cardNumber'
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder='XXXX XXXX XXXX XXXX'
            className='checkout-input'
            required
          />
          {cardType && <p>Card type: {cardType}</p>}

          <label
            htmlFor='expiryDate'
            className='checkout-label'
          >
            Expiry Date (MM/YY):
          </label>
          <input
            type='text'
            id='expiryDate'
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder='MM/YY'
            className='checkout-input'
            required
          />

          <label
            htmlFor='cvv'
            className='checkout-label'
          >
            CVV:
          </label>
          <input
            type='text'
            id='cvv'
            value={cvv}
            onChange={handleCvvChange}
            placeholder='XXX'
            className='checkout-input'
            required
          />

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6'
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
