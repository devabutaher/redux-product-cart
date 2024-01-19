export const generateProductID = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    0
  );
  return maxId + 1;
};
