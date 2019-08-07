import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";

import {
  space,
  fontSize,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  backgroundColor
} from "styled-system";

const Hamburger = styled("button", { shouldForwardProp })(
  space,
  fontSize,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  backgroundColor
);

Hamburger.defaultProps = {
  backgroundColor: "white",
  borderColor: "transparent",
  cursor: "pointer"
};

export default Hamburger;
