import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ClassNames, ClassNamesContent } from "@emotion/core";

interface ILinksProps {
  activeClassName: string;
}
const Links: FC<ILinksProps> = ({ activeClassName }) => (
  <>
    <NavLink to="/map" exact={true} activeClassName={activeClassName}>
      Map
    </NavLink>
    <NavLink to="/" exact={true} activeClassName={activeClassName}>
      Home
    </NavLink>
    {/*  TODO: 404 page */}
  </>
);

const renderLinks = ({ css }: ClassNamesContent<any>) => {
  const activeClassName = css`
    background-color: #09d3ac;
  `;
  return <Links activeClassName={activeClassName} />;
};

export const SideNavbar: FC = () => {
  return (
    <div>
      <ClassNames>{renderLinks}</ClassNames>
    </div>
  );
};
