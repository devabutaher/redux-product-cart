import {
  ADDPRODUCT,
  ADDTOCART,
  REMOVEPRODUCT,
  UPDATEPRODUCTQUANTITY,
} from "./actionTypes";

const generateProductID = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    0
  );
  return maxId + 1;
};

const updateProductQuantity = (products, productId, quantity) => {
  return products.map((product) =>
    product.id === productId
      ? {
          ...product,
          quantity: product.quantity + quantity,
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
            id: generateProductID(state),
            name,
            price,
            quantity,
            image_url,
            category,
          },
        ],
      };

    case REMOVEPRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case ADDTOCART:
      const productAddToCart = state.products.find(
        (product) => product.id === action.payload
      );

      if (productAddToCart) {
        const existingCartProduct = state.cart.find(
          (product) => product.id === productAddToCart.id
        );

        if (existingCartProduct) {
          const updatedCart = updateProductQuantity(
            state.products,
            productAddToCart.id,
            +1
          );

          const updatedProducts = updateProductQuantity(
            state.products,
            productAddToCart.id,
            -1
          );

          return { ...state, products: updatedProducts, cart: updatedCart };
        }
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

      switch (updateType) {
        case "addQuantity":
          const addQuantity = updateQuantity(state.products, productId, +1);
          return { ...state, products: addQuantity };

        case "removeQuantity":
          const removeQuantity = updateQuantity(state.products, productId, -1);
          return { ...state, products: removeQuantity };
      }

    default:
      return state;
  }
};

export default productReducer;
