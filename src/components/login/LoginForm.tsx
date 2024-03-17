import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useAuth from '@/composables/useAuth';
import { Link } from 'react-router-dom';
import FormFieldItem from './FormFieldItem';

const LoginForm = () => {
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

  const { login } = useAuth();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    login(data);
  };

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

  return (
    <div className='w-72 px-8 py-4 border-spacing-1 border-2 border-slate-300'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          {loginFields.map((fld) => (
            <FormFieldItem
              key={fld.name}
              fld={fld}
            />
          ))}
          <Button type='submit'>Login</Button>
          <Link
            className='text-xs font-thin px-2'
            to='/register'
          >
            Don't have an account?
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
