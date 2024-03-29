import { generateProductID } from "../../utils/generateProductID";
import { updateProductQuantity } from "../../utils/updateProductQuantity";
import {
  ADDPRODUCT,
  ADDTOCART,
  REMOVECARTPRODUCT,
  UPDATEPRODUCTQUANTITY,
} from "./actionTypes";

const productReducer = (
  state = { products: [], cart: [], totalPrice: 0 },
  action
) => {
  switch (action.type) {
    case ADDPRODUCT:
      const { name, price, quantity, image_url, category } = action.payload;

      return {
        ...state,
        products: [
          ...state.products,
          {
            id: generateProductID(state.products),
            name,
            price,
            quantity,
            image_url,
            category,
          },
        ],
      };

    case ADDTOCART:
      const productAddToCart = state.products.find(
        (product) => product.id === action.payload
      );

      const existingCartProduct = state.cart.find(
        (product) => product.id === productAddToCart.id
      );

      if (existingCartProduct) {
        // update the product quantity
        const updatedProducts = updateProductQuantity(
          state.products,
          productAddToCart.id,
          -1
        );

        // update the cart product quantity
        const updatedCart = updateProductQuantity(
          state.cart,
          existingCartProduct.id,
          +1
        );

        return {
          ...state,
          products: updatedProducts,
          cart: updatedCart,
          totalPrice: state.totalPrice + Number(productAddToCart.price),
        };
      } else {
        // update the product quantity
        const updatedProducts = updateProductQuantity(
          state.products,
          productAddToCart.id,
          -1
        );

        return {
          ...state,
          products: updatedProducts,
          cart: [...state.cart, { ...productAddToCart, quantity: 1 }],
          totalPrice: state.totalPrice + Number(productAddToCart.price),
        };
      }

    case UPDATEPRODUCTQUANTITY:
      const { productId, updateType } = action.payload;

      // find the updated product
      const productUpdateQuantity = state.products.find(
        (product) => product.id === productId
      );

      switch (updateType) {
        case "addQuantity":
          // update the product quantity
          const addProductUpdate = updateProductQuantity(
            state.products,
            productId,
            -1
          );

          // update the cart product quantity
          const addCartQuantity = updateProductQuantity(
            state.cart,
            productId,
            +1
          );

          return {
            ...state,
            products: addProductUpdate,
            cart: addCartQuantity,
            totalPrice: state.totalPrice + Number(productUpdateQuantity.price),
          };

        case "removeQuantity":
          // update the product quantity
          const removedProductUpdate = updateProductQuantity(
            state.products,
            productId,
            +1
          );

          // update the cart product quantity
          const removedCartUpdate = updateProductQuantity(
            state.cart,
            productId,
            -1
          );

          return {
            ...state,
            products: removedProductUpdate,
            cart: removedCartUpdate,
            totalPrice: state.totalPrice - Number(productUpdateQuantity.price),
          };
      }

    case REMOVECARTPRODUCT:
      // find the removed cart product
      const removedCartProduct = state.cart.find(
        (product) => product.id === action.payload
      );

      // remove the product in cart
      const removedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );

      // update the product quantity
      const updateProduct = updateProductQuantity(
        state.products,
        action.payload,
        +removedCartProduct.quantity
      );

      return {
        products: updateProduct,
        cart: removedCart,
        totalPrice:
          state.totalPrice -
          Number(removedCartProduct.price * removedCartProduct.quantity),
      };

    default:
      return state;
  }
};

export default productReducer;
