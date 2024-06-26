import React, { useEffect } from "react";
import NavBar from "../components/navBar/navBar";
import AutoFocusInput from "../components/autoFocus/autoFocus";
import UseReducer from "../components/useReducer/useReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productAsyncActions } from "../redux/products/action";

function ContactScreen() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productAsyncActions());
  }, []);

  const addToCartFn = (product) => {
    dispatch(addToCart(product));
  };
  if (error) {
    return <h3>Something went wrong</h3>;
  } else {
    return (
      <div>
        <NavBar />
        {loading ? (
          <h4>Please wait</h4>
        ) : (
          <>
            <div>
              {products.map((eachProduct) => {
                return (
                  <>
                    <h3>{eachProduct.title}</h3>
                    <h3>{eachProduct.price}</h3>
                    <button onClick={() => addToCartFn(eachProduct)}>
                      Add to cart
                    </button>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ContactScreen;
