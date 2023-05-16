import React, { useState } from "react";
import "./product.css";
import { Footer, NavBar, TopBar } from "../../components";
import { getAllParams } from "../../api/params";
import { crossPrice, deleteProduct } from "../../assets";
import AddToCartBtn from "../../components/addTocartBtn/addToCartBtn";
import { GreenNotify, RedNotify } from "../../helper/utility";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader";
import { productInCart } from "../../redux/userDataSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [count, setCount] = useState(1);
  const auth = useSelector((data) => data.userDataSlice.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const { product } = getAllParams();
  let item = JSON.parse(product);

  const handleCountChange = (change) => {
    const newCount = count + change;
    if (newCount >= 1 && newCount <= 20) {
      setCount(newCount);
    }
  };

  const addToCartProduct = () => {
    if (!auth) return navigate("/login");
    let arr = [];
    let product = {
      product: item?._id,
      quantity: count,
      price: item?.salePrice ? item?.salePrice : item?.price,
    };
    arr.push(product);

    let body = {
      products: arr,
    };

    let getRes = (res) => {
      if (res?.status == 201) {
        //console.log("res of product", res?.data?.updatedcart?.products?.length);
        GreenNotify("Your Product is add to Cart");
        dispatch(productInCart(res?.data?.updatedcart?.products?.length));
      } else {
        RedNotify(res?.message);
      }
      //console.log("res of create cart", res);
    };
    callApi(
      "POST",
      routes.createCart,
      body,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <Loader loading={isloading} />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Product</h1>
          <div className="nova-product-main-container">
            <div className="nova-product-container">
              <div className="nova-product-main-img-container">
                <img src={item.image} alt="" />
              </div>
              <div className="nova-product-details-main-container">
                <div className="nova-product-name-main-container">
                  <div className="nova-product-nam-container">
                    <p>Product Name</p>
                  </div>
                  <div className="nova-product-off-container">
                    <p>50% OFF</p>
                  </div>
                </div>
                <div className="nova-product-description">
                  <p>{item?.description}</p>
                </div>
                <div className="nova-product-price-container">
                  {item?.salePrice && (
                    <div className="nova-product-cross-price-container">
                      <img src={crossPrice} alt="cross-icon" />
                      <p>${item?.price}.00</p>
                    </div>
                  )}
                  <div className="nova-product-price-product">
                    <p>${item?.salePrice ? item?.salePrice : item?.price}</p>
                  </div>
                </div>
                <div className="nova-product-qty-main-container">
                  <div
                    onClick={() => handleCountChange(-1)}
                    className="nova-product-qty-count-container"
                  >
                    <p>-</p>
                  </div>
                  <div className="nova-product-qty-container">
                    <p>{count}</p>
                  </div>
                  <div
                    onClick={() => handleCountChange(1)}
                    className="nova-product-qty-count-container"
                  >
                    <p>+</p>
                  </div>
                </div>
                <div
                  onClick={addToCartProduct}
                  className="nova-product-add_to_cart-btn"
                >
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
