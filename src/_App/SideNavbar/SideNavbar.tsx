import React, { FC } from "react";
import { SideNavbarPanel } from "./SideNavbarPanel";
import { SideNavbarItem } from "./SideNavbarItem";
import { IconName } from "../../_Components/Icons";

const Links: FC = () => (
  <>
    <SideNavbarItem to="/" exact={true} iconName={IconName.Home} />
    <SideNavbarItem
      to="/statistics"
      exact={true}
      iconName={IconName.ChartBar}
    />
    <SideNavbarItem to="/map" exact={true} iconName={IconName.MapMarker} />
    <SideNavbarItem to="/renovations" exact={true} iconName={IconName.Tools} />
    <SideNavbarItem to="/services" exact={true} iconName={IconName.BoxFull} />
    {/*  TODO: 404 page */}
  </>
);

export const SideNavbar: FC = () => {
  return (
    <SideNavbarPanel>
      <Links />
    </SideNavbarPanel>
  );
};
