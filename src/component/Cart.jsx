import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = () => {
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            {/* <!-- Cart Item --> */}
            <div class="cartCard">
              <div class="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <Image
                  class="lws-cartImage"
                  width={600}
                  height={600}
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product"
                />
                {/* <!-- cart item info --> */}
                <div class="space-y-2">
                  <h4 class="lws-cartName">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                  </h4>
                  <p class="lws-cartCategory">Men{"'"}s clothing</p>
                  <p>
                    BDT <span class="lws-cartPrice">1100</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div class="flex items-center space-x-4">
                  <button class="lws-incrementQuantity">
                    <FaPlus size={20} />
                  </button>
                  <span class="lws-cartQuantity">2</span>
                  <button class="lws-decrementQuantity">
                    <FaMinus size={20} />
                  </button>
                </div>
                {/* <!-- price --> */}
                <p class="text-lg font-bold">
                  BDT <span class="lws-calculatedPrice">2200</span>
                </p>
              </div>
              {/* <!-- delete button --> */}
              <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button class="lws-removeFromCart">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <div>
            <div class="billDetailsCard">
              <h4 class="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div class="space-y-4">
                {/* <!-- sub total --> */}
                <div class="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span class="lws-subtotal">8800</span>
                  </p>
                </div>
                {/* <!-- Discount --> */}
                <div class="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span class="lws-discount">0</span>
                  </p>
                </div>
                {/* <!-- VAT --> */}
                <div class="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span class="vat">0</span>
                  </p>
                </div>
                {/* <!-- Total --> */}
                <div class="flex items-center justify-between pb-4">
                  <p class="font-bold">TOTAL</p>
                  <p class="font-bold">
                    BDT <span class="lws-total">8800</span>
                  </p>
                </div>
                <button class="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
