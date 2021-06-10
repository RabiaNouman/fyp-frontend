import React, { useState, useEffect } from "react";
import Header from "./Header";

function Profile() {
  var id;
  const [donor, setDonor] = useState("");
  useEffect(() => {
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`/donor/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === null) {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setDonor(data);
          // console.log("donation ka data");
          // console.log(donations);
        });
      } else {
        console.log("No donor is found....");
      }
    });
    //setDonations(data);
    //console.log(donations);
  }, []);

  return (
    <div className="div-bg-color">
      <Header />
      {console.log(donor)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Register Yourself <span className="title-under"></span>
          </h1>
          <p className="page-description">
            sign up yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Here is Your Profile</b>{" "}
                    <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div></div>
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" />
                    <br></br>
                  </div>
                  <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={donor.donorname}
                    className="form-control"
                  />
                  <br>
                  </br>
                </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={donor.password}
                      className="form-control"
                    />
                    <br />
                    <br />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" />
                    <br />
                    <br />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      value={donor.donorname}
                      className="form-control"
                    />
                    <br />
                    <br />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={donor.donorname}
                      className="form-control"
                    />
                    <br></br>
                  </div>
                </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <br />
                <br />
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
