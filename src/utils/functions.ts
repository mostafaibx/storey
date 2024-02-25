import { toast } from '@/components/ui/use-toast';
import { direction } from '../types';

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
 * Scrolls the HTMLDivElement to the left or right based on the given direction.
 *
 * @param {direction} direction - The direction to scroll the element. Can be "left" or "right".
 * @param {HTMLDivElement | null} ref - The reference to the HTMLDivElement to scroll. Can be null.
 */
export const scrollHandler = (
  direction: direction,
  ref: HTMLDivElement | null
) => {
  if (direction === 'left') {
    ref?.scrollTo({
      left: ref.scrollLeft - 300,
      behavior: 'smooth',
    });
  } else {
    ref?.scrollTo({
      left: ref.scrollLeft + 300,
      behavior: 'smooth',
    });
  }
};

/**
 * Calculates the remaining time until a specified date.
 *
 * @param {string} date - The target date in string format.
 * @return {{days: number, hours: number, minutes: number, seconds: number}} - An object containing the remaining days, hours, minutes, and seconds.
 */
export const updateCountDown = (date: string) => {
  const now = new Date().getTime();
  const targetDate = new Date(date).getTime();
  const timeRemaining = targetDate - now;
  if (timeRemaining <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) | 0;
    const hours =
      Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) |
      0;
    const minutes =
      Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)) | 0;
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000) | 0;

    return { days, hours, minutes, seconds };
  }
};

export const addItemToCart = (item: {}, cart: any) => {
  const exisitingItem = cart.find((cartItem) => cartItem.pid === item.pid);
  toast({
    description: 'The Item is added to cart.',
    duration: 3000,
  });
  if (exisitingItem) {
    return cart.map((cartItem: {}) =>
      cartItem.pid === item.pid
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};
