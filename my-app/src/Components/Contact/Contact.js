import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="Contact wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your Email"
                ></input>
                <textarea
                  className="form-control mt-2"
                  placeholder="Enter your comment"
                  rows="3"
                ></textarea>
                <button type="submit" className="btn btn-dark mt-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
