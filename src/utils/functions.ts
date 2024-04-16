import { getAddressFromGoogle } from '@/api/address';
import {
  GeoLocationAddress,
  GeolocationResponse,
  cartItem,
} from '@/types/types';

/**
+ * Slices a given text to a specified length and adds ellipsis if the text is longer than the specified length.
+ * @param {string} text - The text to be sliced.
+ * @param {number} length - The maximum length of the sliced text. Default is 50.
+ * @return {string} - The sliced text with ellipsis if necessary.
*/
export const textSlicer = (text: string, length: number = 50) => {
  if (text.length <= length) {
    return text;
  } else {
    return text.slice(0, length) + '...';
  }
};

/**
 * Calculates the total price of all items in the cart.
 *
 * @param {cartItem[]} items - An array of cart items.
 * @return {number} The total price of all items in the cart.
 */
export const cartTotal = (items: cartItem[]) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price * (item.quantity || 1);
  });
  return total;
};

export const getLocation = (): Promise<GeolocationResponse[]> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const address = getAddressFromGoogle(latitude, longitude);
        resolve(address);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export function getAddressValues(
  addressObject: GeolocationResponse
): GeoLocationAddress {
  const addressComponents = addressObject.address_components;
  const formattedAddress = addressObject.formatted_address;

  const streetNumber = addressComponents.find((component) =>
    component.types.includes('street_number')
  )?.long_name;
  const streetName = addressComponents.find((component) =>
    component.types.includes('route')
  )?.long_name;
  const locality = addressComponents.find((component) =>
    component.types.includes('locality')
  )?.long_name;
  const postalCode = addressComponents.find((component) =>
    component.types.includes('postal_code')
  )?.long_name;
  const country = addressComponents.find((component) =>
    component.types.includes('country')
  )?.long_name;

  return {
    streetNumber,
    streetName,
    locality,
    plz: postalCode,
    country,
    formattedAddress,
  };
}

export const formatDateAndTime = (date: string) => {
  const formatedDate = new Date(date);
  const options = {
    year: 'numeric' as const,
    month: 'numeric' as const,
    day: 'numeric' as const,
    hour: 'numeric' as const,
    minute: 'numeric' as const,
    second: 'numeric' as const,
    hour12: false,
    timeZone: 'UTC',
  };
  return formatedDate.toLocaleString(undefined, options);
};

export const generateOrderNumber = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let orderNumber = '';

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderNumber += characters[randomIndex];
  }

  return orderNumber;
};
