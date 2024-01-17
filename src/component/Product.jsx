import Image from "next/image";

const Product = () => {
  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <div class="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          <div class="lws-productCard">
            <Image
              class="lws-productImage"
              width={600}
              height={600}
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <div class="p-4 space-y-2">
              <h4 class="lws-productName">Spring and summershoes</h4>
              <p class="lws-productCategory">Mens shoes</p>
              <div class="flex items-center justify-between pb-2">
                <p class="productPrice">
                  BDT <span class="lws-price">400</span>
                </p>
                <p class="productQuantity">
                  QTY <span class="lws-quantity">10</span>
                </p>
              </div>
              <button class="lws-btnAddToCart">Add To Cart</button>
            </div>
          </div>
          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}

        <div>
          {/* <!-- Product Input Form --> */}
          <div class="formContainer">
            <h4 class="formTitle">Add New Product</h4>
            <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
              {/* <!-- product name --> */}
              <div class="space-y-2">
                <label for="lws-inputName">Product Name</label>
                <input
                  class="addProductInput"
                  id="lws-inputName"
                  type="text"
                  required
                />
              </div>
              {/* <!-- product category --> */}
              <div class="space-y-2">
                <label for="lws-inputCategory">Category</label>
                <input
                  class="addProductInput"
                  id="lws-inputCategory"
                  type="text"
                  required
                />
              </div>
              {/* <!-- product image url --> */}
              <div class="space-y-2">
                <label for="lws-inputImage">Image Url</label>
                <input
                  class="addProductInput"
                  id="lws-inputImage"
                  type="text"
                  required
                />
              </div>
              {/* <!-- price & quantity container --> */}
              <div class="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div class="space-y-2">
                  <label for="ws-inputPrice">Price</label>
                  <input
                    class="addProductInput"
                    type="number"
                    id="lws-inputPrice"
                    required
                  />
                </div>
                {/* <!-- quantity --> */}
                <div class="space-y-2">
                  <label for="lws-inputQuantity">Quantity</label>
                  <input
                    class="addProductInput"
                    type="number"
                    id="lws-inputQuantity"
                    required
                  />
                </div>
              </div>
              {/* <!-- submit button --> */}
              <button type="submit" id="lws-inputSubmit" class="submit">
                Add Product
              </button>
            </form>
          </div>
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </main>
  );
};

export default Product;
