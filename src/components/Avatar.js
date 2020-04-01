import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  space,
  width,
  height,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borderStyle,
  borderColor,
  borderWidth,
  borderRadius,
  textStyle,
} from 'styled-system';

const Avatar = styled('img', { shouldForwardProp })(
  space,
  width,
  height,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borderRadius,
  borderColor,
  borderStyle,
  borderWidth,
  borderStyle,
  {
    boxSizing: 'border-box',
    textDecoration: 'none',
    opacity: 1,
    transition: 'opacity .25s ease-in',
  }
);

Avatar.defaultProps = {
  display: 'block',
  bg: 'transparent',
};

export default Avatar;
