"use client";

import { removeProduct, updateProductQuantity } from "@/redux/product/actions";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, type) => {
    dispatch(updateProductQuantity(id, type));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <main className="py-16">
      <div className="container px-2 mx-auto 2xl:px-8">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {items.cart.length <= 0 ? (
              <h1>No Product Found</h1>
            ) : (
              items.cart.map((product) => (
                <div key={product.id} className="cartCard">
                  <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <Image
                      className="lws-cartImage"
                      width={600}
                      height={600}
                      src={product.image_url}
                      alt="product"
                    />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                      <h4 className="lws-cartName">{product.name}</h4>
                      <p className="lws-cartCategory">{product.category}</p>
                      <p>
                        BDT{" "}
                        <span className="lws-cartPrice">{product.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(product.id, "addQuantity")
                        }
                        className="lws-incrementQuantity"
                        disabled={
                          items.products.find((item) => item.id === product.id)
                            .quantity === 0
                        }
                      >
                        <FaPlus size={20} />
                      </button>
                      <span className="lws-cartQuantity">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(product.id, "removeQuantity")
                        }
                        className="lws-decrementQuantity"
                        disabled={product.quantity === 1}
                      >
                        <FaMinus size={20} />
                      </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">
                      BDT{" "}
                      <span className="lws-calculatedPrice">
                        {product.price}
                      </span>
                    </p>
                  </div>
                  {/* <!-- delete button --> */}
                  <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="lws-removeFromCart"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))
            )}
            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* <!-- sub total --> */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">{items.totalPrice}</span>
                  </p>
                </div>
                {/* <!-- Discount --> */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">0</span>
                  </p>
                </div>
                {/* <!-- VAT --> */}
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">0</span>
                  </p>
                </div>
                {/* <!-- Total --> */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{items.totalPrice}</span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
