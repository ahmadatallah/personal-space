/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H3, Div, Img } from "../elements";
import Flex from "../components/Flex";
import Connect from "../containers/Connect";
import ColorModeApplier from "../containers/ColorModeApplier";
import { useColorMode } from "theme-ui";
import about from "../assets/images/about-img.jpg";
import { modes } from "../utils/constants";
function About() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
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

      <Flex justifyContent="center" flexDirection="column" pt={[5, 2, 3]}>
        <Div
          display="block"
          mb={[3, 2, 1]}
          width={[300, 300, 400]}
          alignItems="center"
        >
          <Img src={about} />
        </Div>
        <Div mx="auto" maxWidth="64rem">
          <H3
            px={[3, 4]}
            fontWeight={4}
            style={{ "font-family": theme.typefaces.mono }}
          >
            I am Ahmad Atallah. An egyptian software engineer. What makes me
            alife that I am supposed to do things that I am interested in,
            learning more and fastly. I like taking visual photos, or I can say
            that I love cinematography. Noam Chomsky once said: "When you walk
            around, you're talking to yourself. You can't stop. I mean, it takes
            a real act of will not to talk to yourself, and what you're doing is
            thinking" and I find it the actual state of my mind all the time.
          </H3>
        </Div>
        <Container mx="auto" px={[3, 4]} maxWidth="64rem">
          <Connect />
        </Container>
      </Flex>
    </>
  );
}

export default About;
