/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import Bio from "../pages/archive/Bio";
import { Div } from "../elements";
import Container from "../components/Container";
import BornRich from "../pages/archive/BornRich";
import MidnightStory from "../pages/archive/MidnightStory";
import Society from "../pages/archive/Society";
import EVSP from "../pages/archive/EVSP";
import Para from "../pages/archive/Para";
function ArchiveContainer({ ...props }) {
  const { textColor } = useEveryReloadColorMode();
  return (
    <Div mb={3}>
      <Para />
      <EVSP />
      <MidnightStory />
      <Society />
      <BornRich />
      <Bio />
    </Div>
  );
}

export default ArchiveContainer;
