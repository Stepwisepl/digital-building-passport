import React, { FC } from "react";

interface IProps {
  icon: string[];
}

export const ICON_MOCK_ROLE = "icon-mock-host";
export const ICON_PATH_SEPARATOR = "|";

export const FontAwesomeIcon: FC<IProps> = ({ icon }) => {
  const info = icon.join(ICON_PATH_SEPARATOR);
  return <i role={ICON_MOCK_ROLE} data-icon-info={info} />;
};

interface IIconData {
  type?: string;
  iconName?: string;
}

export const getIconData = (element: HTMLElement): IIconData => {
  const info = element.getAttribute("data-icon-info") || "";
  const [type, iconName] = info.split(ICON_PATH_SEPARATOR);
  return {
    type,
    iconName
  };
};

export const findIconData = (element: HTMLElement) => {
  const icon = element.querySelector("i");
  return icon && getIconData(icon);
};
