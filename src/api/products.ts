export const getAllProducts = async () => {
  const data = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
  );
  const result = await data.json();
  return result;
};
