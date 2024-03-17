import { formField } from '@/types/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const FormFieldItem: React.FC<{ fld: formField }> = ({ fld }) => {
  return (
    <FormField
      control={fld.form.control}
      name={fld.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{fld.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={fld.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldItem;
