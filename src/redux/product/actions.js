import {
  ADDPRODUCT,
  ADDTOCART,
  REMOVEPRODUCT,
  UPDATEPRODUCTQUANTITY,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVEPRODUCT,
    payload: productId,
  };
};

export const addToCart = (productId) => {
  return {
    type: ADDTOCART,
    payload: productId,
  };
};

export const updateProductQuantity = (productId, updateType) => {
  return {
    type: UPDATEPRODUCTQUANTITY,
    payload: { productId, updateType },
  };
};
