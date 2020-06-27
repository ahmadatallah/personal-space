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

const ColorModeButton = styled('button', { shouldForwardProp })(
  ({ theme, colorMode }) => ({
    ':hover,:focus': {
      color: theme.colors.modes[colorMode].secondary,
      boxShadow: '0 0 0 3px',
      outline: 'none',
    },
  }),
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
    width: '36px',
    height: '36px',
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

ColorModeButton.defaultProps = {
  bg: 'transparent',
  cursor: 'pointer',
};

export default ColorModeButton;
