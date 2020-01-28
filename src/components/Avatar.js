import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
} from 'styled-system';

const Avatar = styled('img', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
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
