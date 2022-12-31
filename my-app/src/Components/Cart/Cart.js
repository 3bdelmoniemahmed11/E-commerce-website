import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../Store/Features/Cart/HandlerCartSlice";

const Card = () => {
  const state = useSelector((state) => state.cartOptions.cart);
  const dispatch = useDispatch();

  const EmptyBasket = () => {
    return (
      <div className="row text-center mt-4">
        <div className="col-lg-12">
          <h2>Your cart is Empty....</h2>
        </div>
      </div>
    );
  };
  const CartBasket = () => {
    return state.map((product) => {
      console.log(state);
      return (
        <div className="productCard cartItem" key={product.id}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={product.image} alt={product.title}></img>
            </div>
            <div className="col-md-6 productBody ">
              <h4 className="prodctCategory">{product.category}</h4>
              <h4 className="productTitle">{product.title}</h4>
              <p className="productQuantity">
                <span>Quantity</span>: {product.quantity}
              </p>
              <p className="productPrice">
                Price{" "}
                <span> ${(product.quantity * product.price).toFixed(3)}</span>
              </p>

              <button
                className="btn btn-outline-dark "
                onClick={() => dispatch(incrementQuantity(product))}
              >
                <i className="fa fa-plus"></i>
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => dispatch(decrementQuantity(product))}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={() => dispatch(removeFromCart(product))}
              >
                <i className="fa fa-trash me-2"></i>
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <div className="container">
        {state.length > 0 ? <CartBasket /> : <EmptyBasket />}
      </div>
    </Fragment>
  );
};

export default Card;
