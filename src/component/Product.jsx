"use client";

import { addProduct, addToCart } from "@/redux/product/actions";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      name: form.name.value,
      image_url: form.image_url.value,
      quantity: form.quantity.value,
      price: form.price.value,
      category: form.category.value,
    };

    dispatch(addProduct(product));
  };

  const handleCart = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {items.products.length <= 0 ? (
            <h1>No Product Found</h1>
          ) : (
            items.products.map((product) => (
              <div key={product.id} className="lws-productCard">
                <Image
                  className="lws-productImage"
                  width={600}
                  height={600}
                  src={product.image_url}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{product.name}</h4>
                  <p className="lws-productCategory">{product.category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{product.price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY{" "}
                      <span className="lws-quantity">{product.quantity}</span>
                    </p>
                  </div>
                  <button
                    className="lws-btnAddToCart"
                    disabled={product.quantity <= 0}
                    onClick={() => handleCart(product.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          )}
          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}

        <div>
          {/* <!-- Product Input Form --> */}
          <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-[#534F4F]"
              id="lws-addProductForm"
            >
              {/* <!-- product name --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input
                  className="addProductInput"
                  id="lws-inputName"
                  name="name"
                  type="text"
                  required
                />
              </div>
              {/* <!-- product category --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input
                  className="addProductInput"
                  id="lws-inputCategory"
                  name="category"
                  type="text"
                  required
                />
              </div>
              {/* <!-- product image url --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input
                  className="addProductInput"
                  id="lws-inputImage"
                  name="image_url"
                  type="text"
                  required
                />
              </div>
              {/* <!-- price & quantity container --> */}
              <div className="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div className="space-y-2">
                  <label htmlFor="ws-inputPrice">Price</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputPrice"
                    name="price"
                    required
                  />
                </div>
                {/* <!-- quantity --> */}
                <div className="space-y-2">
                  <label htmlFor="lws-inputQuantity">Quantity</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputQuantity"
                    name="quantity"
                    required
                  />
                </div>
              </div>
              {/* <!-- submit button --> */}
              <button type="submit" id="lws-inputSubmit" className="submit">
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
