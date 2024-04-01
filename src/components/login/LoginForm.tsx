import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useAuth from '@/composables/useAuth';
import { Link } from 'react-router-dom';
import FormFieldItem from './FormFieldItem';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { UserIcon } from '@heroicons/react/24/solid';

const providers = ['github'];

const LoginForm = () => {
  const { login } = useAuth();

  const formSchema = z.object({
    identifier: z.string().email(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must be at most 50 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });
  const loginFields = [
    {
      form: form,
      name: 'identifier',
      label: 'Email',
      placeholder: 'Joe@doe.com',
      type: 'email',
    },
    {
      form: form,
      name: 'password',
      label: 'Password',
      placeholder: '**********',
      type: 'password',
    },
  ];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    login(data);
  };

  const loginWithProviderHandler = (provider: string) => {
    window.location.href = `http://localhost:1337/api/connect/${provider}`;
  };

  return (
    <div className='flex flex-col justify-center items-center w-80  px-8 py-4 bg-background shadow-lg shadow-coffee-300'>
      <div className='flex justify-center items-center w-20 h-20 rounded-full bg-coffee-500'>
        <UserIcon className='w-10 h-10 text-white' />
      </div>
      <p>Welcome..</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4'
        >
          {loginFields.map((fld) => (
            <FormFieldItem
              key={fld.name}
              fld={fld}
            />
          ))}
          <p className='text-xs font-thin px-2'>forgot your password?</p>
          <Button type='submit'>Login</Button>
          <Link
            className='text-xs font-thin px-2'
            to='/register'
          >
            Don't have an account?
          </Link>
        </form>
      </Form>
      {providers.map((provider) => (
        <Button
          variant='outline'
          onClick={() => loginWithProviderHandler(provider)}
        >
          <GitHubLogoIcon className='w-6 h-6' />
        </Button>
      ))}
    </div>
  );
};

export default LoginForm;
