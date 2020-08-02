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
        fontWeight={600}
      >
        <Connect />
        <Div mb={4}>
          <Span textAlign="center">
            Proudly built with Tachyons, Styled System and React
            <br />© 2020 Ahmad Atallah
          </Span>
        </Div>
      </Div>
    </footer>
  );
}

export default Footer;
