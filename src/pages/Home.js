/** @jsx jsx */
import jsx from "../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H1, H2, Section, H3, Div } from "../elements";
import Flex from "../components/Flex";
import Connect from "../containers/Connect";
import { ThemeProvider, ColorMode } from "theme-ui";
import Footer from "../containers/Footer";
import nix from "../assets/images/nixverse-without-labels.png";
import frames from "../assets/images/frames.jpg";
import Quotation from "../containers/Qoutation";
import BlockLinkGrow from "../components/BlockLinkGrow";
import Header from "../containers/Header";

const Card = lazy(() => import("../components/Card"));

function Home({...props}) {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <Header />
      <Section mx="auto" maxWidth="128rem" minWidth="20rem" mt={100}>
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
            A software engineer. Interested in functional programming, frontend
            engineering, and design. Sync... ? because we are all about sync.
            So, let the data flows!
          </H3>
        </Container>
      </Section>
      <Section mx="auto" px={[3, 4]} maxWidth="64rem">
        <Connect />
      </Section>
      <Flex minWidth={["1884px"]} justifyContent="center" flexWrap="wrap">
        <Suspense fallback={null}>
          <Card
            href="/frames"
            subtitle="I want to be the scenery"
            text=""
            image={frames}
            tag="Frames"
            link={{
              text: "Phone Camera Photos",
              href: "/frames"
            }}
            mx={[2, 3, 4]}
            mb={2}
            borderColor="currencolor"
            width={[1, 3/4, 1 / 4]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Card
            subtitle="Recently Added"
            tag="Writings"
            link={{
              text: "Pattern Matching Example in TypeScript",
              href: "/writings/pascal-typescript-example"
            }}
            mx={[2, 3, 4]}
            mb={2}
            borderColor="currencolor"
            width={[1, 3/4, 1 / 4]}
          >
            <BlockLinkGrow>
              <Quotation href="/writings" />
            </BlockLinkGrow>
          </Card>
        </Suspense>
        <Suspense fallback={null}>
          <Card
            href="/readings"
            subtitle="Recently Read"
            image={nix}
            tag="Readings"
            link={{
              text: "Mapping a universe of open source software",
              href:
                "https://www.tweag.io/posts/2019-02-06-mapping-open-source.html"
            }}
            mx={[2, 3, 4]}
            mb={[2]}
            borderColor="currencolor"
            width={[1, 3/4, 1 / 4]}
          />
        </Suspense>
      </Flex>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
