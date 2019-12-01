import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const SideNavbar: FC = () => {
  return (
    <div>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default SideNavbar;
