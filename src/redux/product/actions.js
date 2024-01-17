import {
  ADDPRODUCT,
  ADDPRODUCTQUANTITY,
  ADDTOCART,
  REMOVEPRODUCT,
  REMOVEPRODUCTQUANTITY,
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

export const addProductQuantity = (productId) => {
  return {
    type: ADDPRODUCTQUANTITY,
    payload: productId,
  };
};

export const removeProductQuantity = (productId) => {
  return {
    type: REMOVEPRODUCTQUANTITY,
    payload: productId,
  };
};
