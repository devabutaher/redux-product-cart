"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";

const ProductProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProductProvider;
