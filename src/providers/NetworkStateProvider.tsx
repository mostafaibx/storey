import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

const NetworkStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);

  const setOnline = () => {
    setIsOnline(true);
  };

  const setOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
  if (!isOnline) {
    return (
      <>
        {children}
        {toast({
          title: 'No Internet Connection',
          description: 'Please check your internet connection',
          action: <button>Retry</button>,
          variant: 'destructive',
        })}
      </>
    );
  }
  return (
    <>
      {children}
      {toast({
        title: 'Internet Connection is Back',
        description: 'You are back online',
        variant: 'default',
      })}
    </>
  );
};

export default NetworkStateProvider;
