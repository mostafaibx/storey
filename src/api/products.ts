import { fetchUnAuthHandler } from '@/utils/apiHelpers';

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/products`;

export const getAllProductsQueryFn = async () => {
  const data = await fetchUnAuthHandler(`${baseUrl}?populate=thumbnail`);
  console.log(data);
  return data;
};
export const getSortedProductsQueryFn = async (sort: string) => {
  const data = await fetchUnAuthHandler(
    `${baseUrl}?sort=${sort}&populate=thumbnail`
  );
  return data;
};
export const getSelectedProductQueryFn = async (id: string | undefined) => {
  if (!id) return;
  const data = await fetchUnAuthHandler(`${baseUrl}/${id}?populate=thumbnail`);
  return data;
};
