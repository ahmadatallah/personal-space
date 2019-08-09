/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H1, H2, Section, H3, Div } from "../elements";
import Flex from "../components/Flex";
import Header from "../containers/Header";
import Card from "../components/Card";
import Connect from "../containers/Connect";
import { ThemeProvider, ColorMode } from "theme-ui";
import Footer from "../containers/Footer";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <Header />
      <Section mx="auto" maxWidth="128rem" minWidth="20rem">
        <Container>
          <Div px={[3, 4]}>
            <H2 fontSize={45}>Sync... </H2>
            <H1 fontSize={80} mt={-4}>
              Atallah
            </H1>
          </Div>
          <H3
            px={[3, 4]}
            mt={-4}
            fontWeight={4}
            style={{ "font-family": theme.typefaces.mono }}
          >
            I am a software engineer. Currently at Swvl. Noam Chomsky once said:
            "When you walk around, you're talking to yourself. You can't stop. I
            mean, it takes a real act of will not to talk to yourself, and what
            you're doing is thinking" and I find it the actual state of my mind
            all the time.
          </H3>
        </Container>
      </Section>
      <Section mx="auto" px={[3, 4]} maxWidth="64rem">
        <Connect />
      </Section>
      <Flex justifyContent="center">
        <Card
          title="Waking Life"
          subtitle="Directed by Richard Linklater"
          text=""
          image="https://66.media.tumblr.com/e692bdcfdaf65f2395236f7ebc0a3690/tumblr_p76px1gfSE1tzp3hyo2_1280.png"
          tag="Frames"
          link={{
            text: "Read more",
            href: "#0"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
        />

        <Card
          title="Is The Man Who Is Tall Happy?"
          subtitle="Noam Chomsky"
          text=""
          image="https://i.ytimg.com/vi/sgHt59KNGks/maxresdefault.jpg"
          tag="Readings"
          link={{
            text: "Read more",
            href: "#0"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
        />
        <Card
          title="I want to be the scenery"
          subtitle="Phone Camera"
          text=""
          image="https://66.media.tumblr.com/f7a70e78d419ba97fdd712a79b8c8700/tumblr_punsh7w51j1tzp3hyo1_500.jpg"
          tag="Writings"
          link={{
            text: "Read more",
            href: "#0"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
        />
      </Flex>
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;
