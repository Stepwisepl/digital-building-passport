import React from "react";
import { render } from "@testing-library/react";
import { SwFontIcon } from "./SwFontIcon";
import { ICON_MOCK_ROLE } from "../../../__mocks__/@fortawesome/react-fontawesome";
import { IconName } from "../library";

describe("When using SwFontIcon", () => {
  it("should pass 'fal' namespace as default value to FontAwesome", async () => {
    const testIconName = IconName.Home;

    const { getByRole, rerender } = await render(
      <SwFontIcon name={testIconName} />
    );
    const icon = getByRole(ICON_MOCK_ROLE);
    rerender(<SwFontIcon name={testIconName} />);
  });
});
