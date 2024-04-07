import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useAuth from '@/composables/useAuth';
import { Link } from 'react-router-dom';
import FormFieldItem from './FormFieldItem';
import { formField } from '@/types/types';

const RegisterForm = () => {
  const { signup } = useAuth();

  const registrationFormSchema: z.ZodType = z.object({
    email: z.string().email('Invalid email format'),
    confirmEmail: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .refine((value) => value === form.getValues('email'), {
        message: 'Emails do not match',
      }),
    username: z.string().min(1, 'Username is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must be at most 50 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: z
      .string()
      .refine((value) => value === form.getValues('password'), {
        message: 'Passwords do not match',
      }),
  });

  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: '',
      confirmEmail: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: z.infer<typeof registrationFormSchema>) => {
    signup(data);
  };

  const signupFormFields: formField[] = [
    {
      form: form,
      name: 'username',
      label: 'Username',
      placeholder: 'Joe',
      type: 'text',
    },
    {
      form: form,
      name: 'email',
      label: 'Email',
      placeholder: 'Joe@doe.com',
      type: 'email',
    },
    {
      form: form,
      name: 'confirmEmail',
      label: 'Confirm Email',
      placeholder: 'Joe@doe.com',
      type: 'email',
    },
    {
      form: form,
      name: 'password',
      label: 'Password',
      placeholder: '********',
      type: 'password',
    },
    {
      form: form,
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: '********',
      type: 'password',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center w-80  px-8 py-4 bg-background shadow-lg shadow-coffee-300'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          {signupFormFields.map((fld) => (
            <FormFieldItem
              key={fld.name}
              fld={fld}
            />
          ))}
          <Button type='submit'>Signup</Button>
          <Link
            className='text-xs font-thin px-2'
            to='/login'
          >
            Already have an account?
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
