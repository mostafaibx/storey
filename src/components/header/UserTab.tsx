import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useUserQuery from '@/composables/useUserQuery';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import CartDrawer from '../Cart/CartDrawer';
import { useState } from 'react';

const UserTab = () => {
  const { data } = useUserQuery();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  return (
    <div className='w-32 bg-slate-300 rounded-lg flex flex-row justify-between px-2 py-1'>
      <DropdownMenu>
        <DropdownMenuTrigger>Username</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='flex flex-row justify-between items-center'>
        <ShoppingCartIcon
          className='h-6 w-6'
          onClick={openCartHandler}
        />
        <span className='text-xs'>{data?.cart?.length}</span>
      </div>
      <CartDrawer isOpen={isCartOpen} />
    </div>
  );
};

export default UserTab;
