import React, { Fragment, useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Features/Cart/HandlerCartSlice";
const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const getProduct = useCallback(async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const Loading = () => {
    return (
      <Fragment>
        <div className="productCard">
          <div className="row">
            <div className="col-md-6">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6">
              <Skeleton height={50} count={5} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  const ShowProduct = () => {
    return (
      <Fragment>
        <div className="productCard">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={product.image} alt={product.title}></img>
            </div>
            <div className="col-md-6 ">
              <h4 className="prodctCategory">{product.category}</h4>
              <h4 className="productTitle">{product.title}</h4>
              <p className="productRating">
                <span>Rating</span> {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="productPrice">${product.price}</h3>
              <p className="productDesc">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
              <NavLink to="/cart" className="btn btn-dark ms-2">
                Go to cart
              </NavLink>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <div className="container">{loading ? <Loading /> : <ShowProduct />}</div>
    </Fragment>
  );
};

export default Product;
