import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Donate from "./Donate";

function Dashboard() {
  return (
    <div>
      <button>
        <Link to="/donate">Donate</Link>
      </button>
      <BrowserRouter>
        <Switch>
          <Route exact path="/donate">
            <Donate />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
