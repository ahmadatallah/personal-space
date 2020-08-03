/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  width,
  minWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  borderWidth,
} from 'styled-system';

const StyledButton = styled('button', { shouldForwardProp })(
  space,
  width,
  minWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  borderWidth,
  {
    minWidth: '1.8rem',
    display: 'inline-block',
    appearance: 'none',
    bg: 'transparent',
    color: 'inherit',
    border: 0,
    borderRadius: '50%',
    padding: '4px',
    margin: '0px',
  }
);

const ColorModeButton = ({ ...props }) => {
  return (
    <StyledButton
      sx={{
        ':hover,:focus': {
          color: 'secondary',
          boxShadow: '0 0 0 3px',
          outline: 'none',
        },
      }}
      {...props}
    />
  );
};

ColorModeButton.defaultProps = {
  bg: 'transparent',
  cursor: 'pointer',
};

export default ColorModeButton;
