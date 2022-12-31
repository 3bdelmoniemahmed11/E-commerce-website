import React, { Fragment } from "react";
import img from "../../assets/bg.webp";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Fragment>
      <div className="card bg-dark text-white border-0">
        <img src={img} className="card-img" alt="background" />
        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-4 fw-bold mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </Fragment>
  );
};

export default Home;
