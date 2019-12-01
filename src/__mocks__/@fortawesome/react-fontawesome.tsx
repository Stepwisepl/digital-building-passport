import React, { FC } from "react";

interface IProps {
  icon: string[];
}

export const ICON_MOCK_ROLE = "icon-mock-host";
export const ICON_PATH_SEPARATOR = "|";

export const FontAwesomeIcon: FC<IProps> = ({ icon }) => {
  const className = icon.join(ICON_PATH_SEPARATOR);
  return <i role={ICON_MOCK_ROLE} className={className} />;
};
