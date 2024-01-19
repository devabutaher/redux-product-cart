export const updateProductQuantity = (products, productId, quantityChange) => {
  return products.map((product) =>
    product.id === productId
      ? {
          ...product,
          quantity: Number(product.quantity) + quantityChange,
        }
      : product
  );
};
