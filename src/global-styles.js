import { createGlobalStyle } from 'styled-components';

import helveticaEOT from './assets/fonts/helvetica/HelveticaNeueLTArabic-Light.eot';
import helveticaWOFF from './assets/fonts/helvetica/HelveticaNeueLTArabic-Light.woff';
import helveticaTTF from './assets/fonts/helvetica/HelveticaNeueLTArabic-Light.ttf';
import helveticaSVG from './assets/fonts/helvetica/HelveticaNeueLTArabic-Light.svg';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: url(${helveticaEOT});
    src: url('${helveticaEOT}#iefix') format('embedded-opentype'),
         url(${helveticaWOFF}) format('woff'),
         url(${helveticaTTF}) format('truetype'),
         url(${helveticaSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  
  html[dir="rtl"] body {
    direction: rtl;
    font-family: Helvetica, sans-serif;
    text-align: right;
    line-height: 15px;
    font-weight: bold;
  
  }
`;

export default GlobalStyles;
