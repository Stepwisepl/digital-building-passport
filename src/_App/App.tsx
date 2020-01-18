import React from "react";
import { Route, Switch } from "react-router";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { Home } from "../_Routes/Home/Home";
import { Map } from "../_Routes/Map/Map";
import { Statistics } from "../_Routes/Statistics/Statistics";
import { Renovations } from "../_Routes/Renovations/Renovations";
import { Services } from "../_Routes/Services/Services";
import { SideNavbar } from "./SideNavbar/SideNavbar";
import { globalStyles } from "./globalStyles";

const Scene = styled.div`
  display: flex;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Scene>
        <SideNavbar />
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/renovations">
            <Renovations />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Scene>
    </>
  );
};

export default App;
