import React from "react";
import { Route, Switch } from "react-router";
import Home from "../_Routes/Home/Home";
import Map from "../_Routes/Map/Map";
import SideNavbar from "./SideNavbar/SideNavbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <SideNavbar />
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
