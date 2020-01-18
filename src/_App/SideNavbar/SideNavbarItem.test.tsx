import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import last from "lodash/last";
import { SideNavbarItem } from "./SideNavbarItem";
import { MemoryHistory } from "history/createMemoryHistory";
import { FontIconType, IconName } from "_Components/Icons";
import { findIconData } from "__mocks__/@fortawesome/react-fontawesome";

describe("When using SideNavbarItem", () => {
  const LINK = "test-link";
  const ICON_NAME = IconName.Home;
  const ICON_TYPE = FontIconType.Solid;
  let history: MemoryHistory;
  let testComponents: RenderResult;

  beforeEach(() => {
    history = createMemoryHistory();
    testComponents = render(
      <Router history={history}>
        <SideNavbarItem
          to={LINK}
          iconName={IconName.Home}
          iconType={FontIconType.Solid}
        />
      </Router>
    );
  });

  it("should set history to link option", () => {
    const anchor = testComponents.container.querySelector("a");
    expect(anchor).not.toBe(null);

    if (anchor) {
      fireEvent.click(anchor);
      const { pathname } = last(history.entries) || { pathname: "FAILED" };
      expect(pathname).toBe(`/${LINK}`);
    }
  });

  it("should render font awesome icon", () => {
    const { container } = testComponents;
    const iconData = findIconData(container);
    expect(iconData).toBeTruthy();

    if (iconData) {
      expect(iconData.iconName).toBe(ICON_NAME);
      expect(iconData.type).toBe(ICON_TYPE);
    }
  });
});
