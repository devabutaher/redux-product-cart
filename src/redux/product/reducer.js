import {
  ADDPRODUCT,
  ADDTOCART,
  REMOVECARTPRODUCT,
  UPDATEPRODUCTQUANTITY,
} from "./actionTypes";

const generateProductID = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    0
  );
  return maxId + 1;
};

const updateProductQuantity = (products, productId, quantityChange) => {
  return products.map((product) =>
    product.id === productId
      ? {
          ...product,
          quantity: Number(product.quantity) + quantityChange,
        }
      : product
  );
};

const productReducer = (state = { products: [], cart: [] }, action) => {
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

    case REMOVECARTPRODUCT:
      const removedCartQuantity = state.cart.find(
        (product) => product.id === action.payload
      ).quantity;

      const removedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );

      const updateProduct = updateProductQuantity(
        state.products,
        action.payload,
        +removedCartQuantity
      );

      return {
        products: updateProduct,
        cart: removedCart,
      };

    case ADDTOCART:
      const productAddToCart = state.products.find(
        (product) => product.id === action.payload
      );

      const existingCartProduct = state.cart.find(
        (product) => product.id === productAddToCart.id
      );

      if (existingCartProduct) {
        const updatedCart = updateProductQuantity(
          state.cart,
          existingCartProduct.id,
          +1
        );

        const updatedProducts = updateProductQuantity(
          state.products,
          productAddToCart.id,
          -1
        );

        return { ...state, products: updatedProducts, cart: updatedCart };
      } else {
        const updatedProducts = updateProductQuantity(
          state.products,
          productAddToCart.id,
          -1
        );

        return {
          ...state,
          products: updatedProducts,
          cart: [...state.cart, { ...productAddToCart, quantity: 1 }],
        };
      }

    case UPDATEPRODUCTQUANTITY:
      const { productId, updateType } = action.payload;

      const existQuantity = state.products.find(
        (product) => product.id === productId
      ).quantity;

      const cartQuantity = state.cart.find(
        (product) => product.id === productId
      ).quantity;

      switch (updateType) {
        case "addQuantity":
          const addCartQuantity = updateProductQuantity(
            state.cart,
            productId,
            +1
          );

          const addProductUpdate = updateProductQuantity(
            state.products,
            productId,
            -1
          );

          return {
            ...state,
            products: addProductUpdate,
            cart: addCartQuantity,
          };

        case "removeQuantity":
          const removeCartQuantity = updateProductQuantity(
            state.cart,
            productId,
            -1
          );

          const removeProductUpdate = updateProductQuantity(
            state.products,
            productId,
            +1
          );

          return {
            ...state,
            products: removeProductUpdate,
            cart: removeCartQuantity,
          };
      }

    default:
      return state;
  }
};

export default productReducer;
