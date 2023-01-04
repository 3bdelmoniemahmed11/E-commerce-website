import React, { Fragment, useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const getProducts = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    setData(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const Loading = () => {
    return (
      <Fragment>
        <div className="col-md-3 mb-2">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3 mb-2">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3 mb-2">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3 mb-2">
          <Skeleton height={300} />
        </div>
      </Fragment>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <Fragment>
        <div className=" filter-buttons mt-2 mb-5">
          <button
            className="btn btn-outline-dark ms-2 mt-2 col-sm-12 col-lg-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark ms-2 mt-2 col-sm-12 col-lg-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark ms-2 mt-2 col-sm-12 col-lg-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-dark ms-2 mt-2 col-sm-12 col-lg-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery clothing
          </button>
          <button
            className="btn btn-outline-dark ms-2 mt-2 col-sm-12 col-lg-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div key={product.id} className="col-lg-3 col-md-4 3 col-sm-6">
              <div className="card product mb-4">
                <img
                  className="card-img-top "
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title ">
                    {product.title.substring(0, 12)}
                  </h5>

                  <p className="card-text">${product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  };
  return (
    <Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </Fragment>
  );
};

export default Products;
