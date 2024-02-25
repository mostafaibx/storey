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
import { useDispatch, useSelector } from 'react-redux';
import { openCart, selectCart } from '@/store/cartSlice';

const CartDrawer = () => {
  const { isOpen } = useSelector(selectCart);
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(openCart());
  };

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button
                variant='outline'
                onClick={openCartHandler}
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
