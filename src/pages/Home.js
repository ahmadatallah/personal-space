/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H1, H2, Section, H3, Div } from "../elements";
import Flex from "../components/Flex";
import Connect from "../containers/Connect";
import { ThemeProvider, ColorMode } from "theme-ui";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import WritingsContainer from "../containers/WritingsContainer";

function Home({ ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <Header />
      <Section mx="auto" maxWidth="128rem" minWidth="20rem" mt={100}>
        <Container>
          <Div px={[3, 4]}>
            <H2 fontSize={45} mb={0}> Sync...  </H2>
            <H1 fontSize={80} mt={0} mb={0}>
              Atallah
            </H1>
          </Div>
          <H3
            px={[3, 4]}
            fontWeight={4}
            style={{ "font-family": theme.typefaces.mono }}
          >
            Hi there! I am Ahmad Atallah, a software engineer. Interested in
            functional programming, frontend engineering, and design. Sync... ?
            because we are all about sync. So, let the data flow!
          </H3>
        </Container>
      </Section>
      <Section mx="auto" px={[3, 4]} maxWidth="64rem">
        <Connect />
      </Section>
      <Flex pl={[3, 4, 5]} pr={[4, 4, 6]} py={0} display="grid" justifyContent="center">
        <WritingsContainer />
      </Flex>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
