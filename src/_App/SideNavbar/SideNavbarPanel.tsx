import styled from "@emotion/styled";
import { colors } from "_Styles/colors";

const topOffset = "24rem";
const panelWidth = "6.5rem";

export const SideNavbarPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: ${panelWidth};

  padding-top: ${topOffset};

  border-top-right-radius: ${panelWidth};

  background-color: ${colors.dark};
`;
