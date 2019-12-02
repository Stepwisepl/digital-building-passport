import React from "react";
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICommonProps } from "_Types/components";
import { FontIconType, IconName } from "../library";

interface IProps extends ICommonProps {
  name: IconName;
  type?: FontIconType;
}

export const SwFontIcon: FC<IProps> = ({
  name,
  className,
  type = FontIconType.Light
}) => {
  const icon = [type, name] as IconProp;
  return <FontAwesomeIcon className={className} icon={icon} />;
};
