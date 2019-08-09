/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from '../theme'
function Footer() {
  return (
    <footer>
      <div
        display="flex"
        justifyContent='center'
        my={0}
      >
        <p style={{ fontFamily: theme.typefaces.mono}}>© 2019 syncatallah</p>
      </div>
    </footer>
  );
}

export default Footer;
