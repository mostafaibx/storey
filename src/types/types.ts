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
  number: string;
  createdAt?: string;
  id?: string;
  items: Product[];
  total?: number;
  status: OrderStatus;
  address: adress;
  paymentMethod: 'cod' | 'paypal';
};
export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export type GeolocationResponse = {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
    location: { lat: number; lng: number };
    location_type: string;
    viewport: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
  };
  place_id: string;
  types: string[];
};

export type GeoLocationAddress = {
  streetNumber: string | undefined;
  streetName: string | undefined;
  locality: string | undefined;
  plz: string | undefined;
  country: string | undefined;
  formattedAddress: string;
};

export type passwordChange = {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
};
