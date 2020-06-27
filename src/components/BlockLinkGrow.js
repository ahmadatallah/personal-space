/** @jsx jsx */
import jsx from '../jsx';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { useThemeUI } from 'theme-ui';

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
  props => ({
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
    textDecoration: 'none',
    transition: 'transform 0.25s ease-out',
    ':hover': {
      cursor: 'pointer',
      transition: 'scale(1.05)',
      color: props.theme.colors.modes[props.colorMode].secondary,
    },
  })
);

const BlockLinkGrow = ({ ...props }) => {
  const { colorMode, theme } = useThemeUI();
  return <StyledA {...props} theme={theme} colorMode={colorMode} />;
};

BlockLinkGrow.defaultProps = {
  bg: 'transparent',
  cursor: 'pointer',
  color: 'text',
};

export default BlockLinkGrow;
