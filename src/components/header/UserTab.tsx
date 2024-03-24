import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import CartDrawer from '../Cart/CartDrawer';
import { useState } from 'react';

import useAuth from '@/composables/useAuth';
import useUser from '@/composables/useUser';
import { Link } from 'react-router-dom';

const UserTab = () => {
  const { logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user } = useUser();
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
          <DropdownMenuItem>
            <Link to={'/profile'}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={'/orders'}>Orders</Link>
          </DropdownMenuItem>
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
