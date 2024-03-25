import { toast } from '@/components/ui/use-toast';
import { cartItem } from '@/types/types';

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
