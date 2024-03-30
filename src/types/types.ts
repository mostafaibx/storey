import { UseFormReturn } from 'react-hook-form';

export type Product = {
  createdAt: string;
  description: string;
  id: string;
  price: number;
  publishedAt: string;
  rating: number; // TODO: change it into object with number of rates and average rate
  stock: number;
  title: string;
  updatedAt: string;
  thumbnail?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type cartItem = {
  id: string;
  stock: number;
  title: string;
  quantity?: number;
  price: number;
  thumbnail: string | undefined;
};

export type signupCredentials = {
  name: string;
  email: string;
  password: string;
};

export type loginCredentials = {
  identifier: string;
  password: string;
};

export type formField = {
  form: UseFormReturn<any, any, any>;
  name: string;
  label: string;
  placeholder: string;
  type: string;
};

export type adress = {
  id?: string;
  street: string;
  plz: string;
  city: string;
  country: string;
};

export type OrderStatus = 'pending' | 'preparing' | 'delivering' | 'delivered';
export type Order = {
  createdAt?: string;
  id?: string;
  items: Product[];
  total?: number;
  status: OrderStatus;
  address: adress;
  paymentMethod: 'cod' | 'paypal';
};
