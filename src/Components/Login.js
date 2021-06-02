import React, { useState } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    const user = {
      username,
      password,
    };

    console.log(username);
    console.log(password);

    return fetch("/administrator/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 400) {
        window.location.href = "/donar-dashboard";
      }
   });
  }

  return (
    <div className="div-bg-color">
      <Header/>
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Sign In <span className="title-under"></span>
          </h1>
          <p className="page-description">
            Signin yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={login} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Sign In</b> <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                    className="form-control"
                    placeholder="UserName*"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Password*"
                    required
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <Link to="/register">Register yourself</Link>
                  <br />
                  <br />
                  <br />
                  <BrowserRouter>
                    <Route path="./register"></Route>
                  </BrowserRouter>
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

export default Login;
