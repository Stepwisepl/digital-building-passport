import React from "react";
import { Route, Switch } from "react-router";
import Home from "./_Components/Home/Home";
import Map from "./_Components/Map/Map";
import SideNavbar from "./_Routes/SideNavbar/SideNavbar";
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
