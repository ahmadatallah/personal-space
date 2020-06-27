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
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
} from 'styled-system';

const H1 = styled('h1', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  {
    boxSizing: 'border-box',
  }
);

H1.defaultProps = {
  color: 'text',
};

export default H1;
