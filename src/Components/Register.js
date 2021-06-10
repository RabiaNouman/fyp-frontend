import React, { useState } from "react";
import Header from "./Header";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useAlert } from 'react-alert'

function Register() {
  const [donorname, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenum] = useState();
  const [email, setEmail] = useState();

  function register(event) {
    event.preventDefault();
    const donor = {
      donorname,
      password,
      address,
      phoneNumber,
      email
    };
    console.log(donor);
    return fetch("/donor", {
      method: "post",
      body: JSON.stringify(donor),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 400) {
        {{alert.show("This is me");}}
      }
      else if (res.status === 500) {
        console.log(res);
      }
   });
  }

  return (
    <div className="div-bg-color">
      <Header/>
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

      <div className="container" >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={register} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Hey babe! Register Yourself</b> <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter your name*"
                    required
                  />
                  <br>
                  </br>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Password*"
                    required
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Email*"
                    required
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Address*"
                    required
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                <PhoneInput
                  className="form-control"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhonenum}/>
                  <br>
                  </br>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
