import React from "react";
import { render } from "@testing-library/react";
import { SwFontIcon } from "./SwFontIcon";
import {
  getIconData,
  ICON_MOCK_ROLE
} from "../../../__mocks__/@fortawesome/react-fontawesome";
import { FontIconType, IconName } from "../library";

describe("When using SwFontIcon", () => {
  describe("and using it with default configuration", () => {
    let testIconName: IconName;
    let icon: HTMLElement;

    beforeEach(async () => {
      testIconName = IconName.Home;
      const { getByRole } = await render(<SwFontIcon name={testIconName} />);
      icon = getByRole(ICON_MOCK_ROLE);
    });

    it("should use FontIconType.Light type as default value", async () => {
      const { type } = getIconData(icon);
      expect(type).toBe(FontIconType.Light);
    });

    it("should set correct icon name", async () => {
      const { iconName } = getIconData(icon);
      expect(iconName).toBe(testIconName);
    });
  });

  describe("and using it with custom configuration", () => {
    it("should pass 'fal' namespace as default value to FontAwesome", async () => {
      const testIconName = IconName.MapMarker;
      const testIconType = FontIconType.Solid;
      const { getByRole } = await render(
        <SwFontIcon type={testIconType} name={testIconName} />
      );
      const icon = getByRole(ICON_MOCK_ROLE);
      const { type, iconName } = getIconData(icon);
      expect(type).toBe(testIconType);
      expect(iconName).toBe(testIconName);
    });
  });
});
