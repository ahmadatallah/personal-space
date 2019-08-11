/** @jsx jsx */
import jsx from "../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H3, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Connect from "../containers/Connect";
import about from "../assets/images/about-img.jpg";
import MinimalHeader from "../containers/MinimalHeader";

const Img = lazy(() => import("../elements/Img"));

function About() {
  return (
    <>
      <MinimalHeader />
      <Flex justifyContent="center" flexDirection="column" pt={[5, 2, 3]}>
        <Div
          display="block"
          mb={[3, 2, 1]}
          width={[300, 300, 400]}
          alignItems="center"
        >
          <Suspense
            fallback={
              <Flex flexDirection="column" justifyContent="center" mx="auto">
                <H2 fontWeight={300}> Loading .... </H2>
              </Flex>
            }
          >
            <Img src={about} />
          </Suspense>
        </Div>
        <Div mx="auto" maxWidth="64rem">
          <H3
            px={[3, 4]}
            fontWeight={4}
            style={{ "font-family": theme.typefaces.mono }}
          >
            He is Ahmad Atallah. An egyptian software engineer. Interested in
            functional programming, frontend engineering, and design. What makes
            him alive is doing things he's interested in, like
            previously mentioned, and willing to learn more and fastly. He likes
            taking visual photos. Photos that he passes by in his dairy life;
            every single day. Noam Chomsky once said: "When you walk around,
            you're talking to yourself. You can't stop. I mean, it takes a real
            act of will not to talk to yourself, and what you're doing is
            thinking" and he finds this is all about the actual state of his
            mind all the time.
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
