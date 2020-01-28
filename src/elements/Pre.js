import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import 'prismjs/themes/prism-solarizedlight.css';

import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system';

const Pre = styled('pre', { shouldForwardProp })(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
    fontFamily: 'monaco, monospace',
  }
);

Pre.defaultProps = {
  boxSizing: 'border-box',
  fontFamily: 'monaco, monospace',
  whiteSpace: 'pre',
  wordWrap: 'break-word',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  overflow: 'auto',
  padding: '1rem',
  backgroundColor: 'background',
  color: 'white',
  fontFeatureSettings: 'normal',
  textAlign: 'left',
  overflowWrap: 'normal',
  lineHeight: '1.5',
  marginBottom: '0px',
  tabSize: 4,
  hyphens: 'none',
  borderRadius: '2px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'secondary',
  borderImage: 'initial',
};

export default Pre;
