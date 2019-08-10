/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Flex from "../components/Flex";
import ColorModeApplier from "../containers/ColorModeApplier";
import { Div, H1 } from "../elements";
import { useColorMode } from "theme-ui";
import { ThemeProvider, ColorMode } from "theme-ui";
import Readings from "../containers/Readings";

const modes = ["light", "black", "dark", "deep", "hack", "pink"];

function Reading({ showColorMode, ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      {showColorMode && (
        <Div mt={1} px={4} py={2} textAlign="right">
          <ColorModeApplier
            mode={colorMode}
            onClick={e => {
              const i = modes.indexOf(colorMode);
              const n = (i + 1) % modes.length;
              setColorMode(modes[n]);
            }}
          />
        </Div>
      )}
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="50em"
        mr="auto"
        ml="auto"
      >
        <Div display="grid" px={5} py={[3, 4, 5]}>
          <Readings />
        </Div>
      </Flex>
    </>
  );
}

export default Reading;
