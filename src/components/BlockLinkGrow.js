/** @jsx jsx */
import { jsx } from 'theme-ui';
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

const StyledA = styled('a', { shouldForwardProp })(
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
    textDecoration: 'none',
    transition: 'transform 0.25s ease-out',
  }
);

const BlockLinkGrow = ({ ...props }) => {
  return (
    <StyledA
      sx={{
        ':hover': {
          cursor: 'pointer',
          transform: 'scale(1.22)',
          color: 'secondary',
        },
      }}
      {...props}
    />
  );
};

BlockLinkGrow.defaultProps = {
  bg: 'transparent',
  cursor: 'pointer',
  color: 'text',
};

export default BlockLinkGrow;
