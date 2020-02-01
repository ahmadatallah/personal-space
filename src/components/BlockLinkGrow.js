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
  fontFamily,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  borderWidth,
  textStyle,
} from 'styled-system';

const BlockLinkGrow = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  borderWidth,
  {
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
    opacity: 0.75,
    textDecoration: 'none',
    transition: 'transform 0.25s ease-out',
    ':hover': {
      cursor: 'pointer',
      opacity: 0.5,
      transition: 'scale(1.05)',
    },
  }
);

BlockLinkGrow.defaultProps = {
  bg: 'transparent',
  cursor: 'pointer',
  color: 'secondary',
};

export default BlockLinkGrow;
