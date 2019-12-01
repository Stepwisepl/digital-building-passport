import React from "react";
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontIconType, IconName } from "../library";

interface IProps {
  name: IconName;
  type?: FontIconType;
}

export const SwFontIcon: FC<IProps> = ({ name, type = FontIconType.Light }) => {
  const icon = [type, name] as IconProp;
  return <FontAwesomeIcon icon={icon} />;
};
