import { fetchUnAuthHandler } from '@/utils/apiHelpers';

const baseUrl = `${
  import.meta.env.VITE_SERVER_URL
}/api/products?populate=thumbnail`;

export const getAllProductsQueryFn = async () => {
  const data = await fetchUnAuthHandler(baseUrl);
  console.log(data);
  return data;
};
export const getSortedProductsQueryFn = async (sort: string) => {
  const data = await fetchUnAuthHandler(`${baseUrl}&sort=${sort}`);
  return data;
};
export const getSelectedProductQueryFn = async (id: string | undefined) => {
  if (!id) return;
  const data = await fetchUnAuthHandler(`${baseUrl}/${id}`);
  return data;
};
