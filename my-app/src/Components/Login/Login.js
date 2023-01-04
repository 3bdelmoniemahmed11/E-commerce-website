import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="log-in">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Enter your Email"
              />
              <input
                className="form-control mt-2"
                type="password"
                placeholder="Enter your Password"
              />
              <input
                type="button"
                className="btn btn-dark  mt-4"
                value="Login"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
