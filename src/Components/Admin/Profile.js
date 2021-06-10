import React, { useState, useEffect } from "react";
import Header from "./Header";

function Profile() {
  var id;
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`/administrator/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setAdmin(data);
        });
      } else {
        console.log(response.status);
        console.log("No admin is found....");
      }
    });
  }, []);

  return (
    <div className="div-bg-color">
      <Header />
      {console.log(admin)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            RROFILE <span className="title-under"></span>
          </h1>
          <p className="page-description">welcome to your profile!</p>
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
                <div style={{fontFamily:"cursive"}}>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Name :</b>
                      </span>
                      {admin.username}
                    </label>
                    <br></br>
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Password :</b>
                      </span>
                      {admin.password}
                    </label>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>E-mail :</b>
                      </span>
                      {admin.email}
                    </label>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Phone Number :</b>
                      </span>
                      {admin.phoneNumber}
                    </label>
                    <br />
                    <br/>
                    <br/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  EDIT
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
