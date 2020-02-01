/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Bio from '../pages/archive/Bio';
import { Div } from '../elements';
import BornRich from '../pages/archive/BornRich';
import MidnightStory from '../pages/archive/MidnightStory';
import Society from '../pages/archive/Society';
import EVSP from '../pages/archive/EVSP';
import Para from '../pages/archive/Para';
function ArchiveContainer({ ...props }) {
  return (
    <Div mb={3} pl={[1, 3, 5]} pr={[1, 3, 5]}>
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
