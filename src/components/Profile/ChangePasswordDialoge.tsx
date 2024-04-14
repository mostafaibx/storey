import useUser from '@/composables/useUser';
import { Button } from '../ui/button';
import {
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from '../ui/dialog';
import { Form } from '../ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFieldItem from '../login/FormFieldItem';

const ChangePasswordDialoge = () => {
  const { changePassword } = useUser();

  const ChangePasswordSchema: z.ZodType = z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must be at most 50 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    passwordConfirmation: z
      .string()
      .refine((value) => value === form.getValues('password'), {
        message: 'Passwords do not match',
      }),
  });

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const changePasswordHandler = (
    data: z.infer<typeof ChangePasswordSchema>
  ) => {
    changePassword(data);
  };
  const ResetPwFields = [
    {
      form: form,
      name: 'currentPassword',
      label: 'Current Password',
      placeholder: '*********',
      type: 'password',
    },
    {
      form: form,
      name: 'password',
      label: 'Password',
      placeholder: '*********',
      type: 'password',
    },
    {
      form: form,
      name: 'passwordConfirmation',
      label: 'Confirm Password',
      placeholder: '*********',
      type: 'password',
    },
  ];

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Change Password</DialogTitle>
        <DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(changePasswordHandler)}>
              {ResetPwFields.map((fld) => (
                <FormFieldItem
                  key={fld.name}
                  fld={fld}
                />
              ))}
              <Button>Change Password</Button>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default ChangePasswordDialoge;
