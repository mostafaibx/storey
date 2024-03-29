import { loginWithProvider } from '@/api/auth';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { provider } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      'access_token'
    );
    loginWithProvider(token || '', provider || '');
    if (token) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className='flex h-screen justify-center items-center pt-20'>
      {' '}
      Login Success Now Redirecting to Home{' '}
    </div>
  );
};

export default RedirectPage;
