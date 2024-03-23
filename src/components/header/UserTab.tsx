import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useUserQuery from '@/composables/useUser';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import CartDrawer from '../Cart/CartDrawer';
import { useState } from 'react';

import useAuth from '@/composables/useAuth';

const UserTab = () => {
  const { logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data: user } = useUserQuery();
  const openCartHandler = () => {
    if (window.screen.width <= 768) {
      setIsCartOpen(true);
    } else {
      window.location.assign('/cart');
    }
  };

  const { isLogin } = useAuth();

  return (
    <div className='w-32  rounded-lg flex flex-row justify-between px-2 py-1'>
      <DropdownMenu>
        <DropdownMenuTrigger>{user?.username}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='flex flex-row justify-between items-center'>
        <ShoppingCartIcon
          className='h-6 w-6'
          onClick={openCartHandler}
        />
      </div>

      {isLogin() && (
        <CartDrawer
          isOpen={isCartOpen}
          onCloseCart={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default UserTab;
