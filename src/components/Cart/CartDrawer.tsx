import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import useCart from '@/composables/useCart';
import CartDrawerElement from './CartDrawerElement';

const CartDrawer = ({ isOpen, onCloseCart }) => {
  const openCartHandler = () => {
    //emit event to close cart
    onCloseCart();
  };

  const { cart } = useCart();

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Your Cart</DrawerTitle>
            <DrawerDescription>
              Check your items before checkout.
            </DrawerDescription>
          </DrawerHeader>
          {cart &&
            cart.items.map((item) => (
              <CartDrawerElement
                key={item.id}
                item={item}
              />
            ))}
          <div className='flex flex-row-reverse justify-between px-6 border-t-2 border-cyan-700'>
            <p>Total: 99$</p>
          </div>
          <DrawerFooter>
            <Button>Checkout</Button>
            <DrawerClose>
              <Button
                variant='outline'
                onClick={openCartHandler}
              >
                Continue Shopping
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
