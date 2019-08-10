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
import nix from "../assets/images/nixverse-without-labels.png";
import frames from "../assets/images/frames.jpg";
import Quotation from "../containers/Qoutation";
import music from "../assets/images/music.jpg";

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
      <Flex minWidth={["1884px"]} justifyContent="center" flexWrap="wrap">
        <Card
          title="Mapping a universe of open source software"
          subLink="https://www.tweag.io/posts/2019-02-06-mapping-open-source.html"
          image={nix}
          tag="Readings"
          link={{
            text: "See more",
            href: "/readings"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
          mb={[2, 2, 0]}
          borderColor="currencolor"
          width={[1, 1 / 2, 1 / 4]}
        />

        <Card
          title="Coming Soon"
          text=""
          tag="Writings"
          link={{
            text: "See more",
            href: "/writings"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
          mb={2}
          borderColor="currencolor"
          width={[1, 1 / 2, 1 / 4]}
        >
          <Quotation />
        </Card>
        <Card
          title="I want to be the scenery"
          subtitle="Cinema . Phone Camera"
          text=""
          image={frames}
          tag="Frames"
          link={{
            text: "See more",
            href: "/Frames"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
          mb={2}
          borderColor="currencolor"
          width={[1, 1 / 2, 1 / 4]}
        />
        <Card
          title="A music that make me quite"
          subtitle="Indie . Soundtracks . Rock .etc."
          image={music}
          tag="Music"
          link={{
            text: "See more",
            href: "/music"
          }}
          maxWidth="25em"
          mx={[2, 3, 4]}
          mb={[2, 2, 0]}
          borderColor="currencolor"
          width={[1, 1 / 2, 1 / 4]}
        />
      </Flex>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
