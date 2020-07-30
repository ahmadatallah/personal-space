/** @jsx jsx */
import jsx from '../jsx';
import { Div, Span } from '../elements';
import Connect from './Connect';

function Footer() {
  return (
    <footer width="100%">
      <Div
        display="flex"
        textAlign="center"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        paddingLeft="100px"
        paddingRight="100px"
        fontWeight={600}
      >
        <Connect />
        <Span m={2} textAlign="center">
          Proudly built with Tachyons, Styled System and React
        </Span>
        <Span>© 2020 Ahmad Atallah</Span>
      </Div>
    </footer>
  );
}

export default Footer;
