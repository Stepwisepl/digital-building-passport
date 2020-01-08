import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ClassNames, ClassNamesContent } from "@emotion/core";
import { SideNavbarPanel } from "./SideNavbarPanel";

interface ILinksProps {
  activeClassName: string;
}
const Links: FC<ILinksProps> = ({ activeClassName }) => (
  <>
    <NavLink to="/" exact={true} activeClassName={activeClassName}>
      Home
    </NavLink>
    <NavLink to="/statistics" exact={true} activeClassName={activeClassName}>
      Statistics
    </NavLink>
    <NavLink to="/map" exact={true} activeClassName={activeClassName}>
      Map
    </NavLink>
    <NavLink to="/renovations" exact={true} activeClassName={activeClassName}>
      Renovations
    </NavLink>
    <NavLink to="/services" exact={true} activeClassName={activeClassName}>
      Services
    </NavLink>
    {/*  TODO: 404 page */}
  </>
);

const styleLinks = ({ css }: ClassNamesContent<any>) => {
  const activeClassName = css`
    background-color: #09d3ac;
  `;
  return <Links activeClassName={activeClassName} />;
};

export const SideNavbar: FC = () => {
  return (
    <SideNavbarPanel>
      <ClassNames>{styleLinks}</ClassNames>
    </SideNavbarPanel>
  );
};
