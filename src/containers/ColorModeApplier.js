/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import ColorModeButton from '../components/ColorModeButton';
import { Svg, Path } from '../elements';
import theme from '../theme';

function ColorModeApplier({ ...props }) {
  return (
    <ColorModeButton
      onClick={props.onClick}
      colorMode={props.mode}
      role="button"
      aria-label="Color Mode"
    >
      <Svg viewBox="0 0 32 34" display="block">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke={theme.colors.modes[props.mode].secondary}
          strokeWidth="4"
        />
        <Path
          d={`
            M 16 0
            A 16 16 0 0 0 16 32
            z
            `}
        />
      </Svg>
    </ColorModeButton>
  );
}

export default ColorModeApplier;
