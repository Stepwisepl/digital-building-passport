import React, { FC } from "react";
import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";
import { FontIconType, IconName, SwFontIcon } from "_Components/Icons";
import { fontSize } from "_Styles/typography";

const ACTIVE_CLASS = "nav-link-activated";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: ${fontSize.xl};
  padding: 2rem;

  border-left: 3px solid transparent;

  &.${({ activeClassName }) => activeClassName} {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    border-left-color: white;
  }

  transition: all 0.3s ease-in-out;
`;

interface IProps {
  to: string;
  exact?: boolean;
  iconType?: FontIconType;
  iconName: IconName;
}

export const SideNavbarItem: FC<IProps> = ({
  to,
  exact = true,
  iconName,
  iconType
}) => {
  console.log(iconType);
  return (
    <StyledNavLink to={to} exact={exact} activeClassName={ACTIVE_CLASS}>
      <SwFontIcon name={iconName} type={iconType} />
    </StyledNavLink>
  );
};
