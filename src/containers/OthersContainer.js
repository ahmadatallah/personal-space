/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import Bio from "../pages/others/Bio";
import { Div } from "../elements";
import Container from "../components/Container";
import BornRich from "../pages/others/BornRich";
import MidnightStory from "../pages/others/MidnightStory";
import Society from "../pages/others/Society";
import EVSP from "../pages/others/EVSP";
function OthersContainer({ ...props }) {
  const { textColor } = useEveryReloadColorMode();
  return (
    <Div mb={3}>
      <EVSP />
      <MidnightStory />
      <Society />
      <BornRich />
      <Bio />
    </Div>
  );
}

export default OthersContainer;
