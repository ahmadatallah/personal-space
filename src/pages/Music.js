/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import MinimalHeader from "../containers/MinimalHeader";
import ReactPlayer from "react-player";
import Flex from "../components/Flex";
import { Div, H1 } from "../elements";
function Music() {
  return (
    <>
      <MinimalHeader />
      <Flex
        flexDirection="row"
        justifyContent="center"
        px={[6, 4, 5]}
        ml='auto'
        mr="auto"
        maxWidth="70rem"
        mt={3}
        mb={2}
      >
        <Div justifyContent="center" width={[1]} mx={3}>
          <H1 fontWeight={300}>Soundtracks</H1>
          <ReactPlayer
            url="https://soundcloud.com/ahmad-atallah/sets/o-menino-e-o-mundo"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <ReactPlayer
            url="https://soundcloud.com/mohamed-shalaby-12/adagio-for-strings-samuels-barber-platoon-1986-ost"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
        </Div>
        <Div justifyContent="center" width={[1]} mx={3}>
          <H1 fontWeight={300}>Music</H1>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=hrF4O4IJaEM"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7UfNgmQzMr0"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
        </Div>
      </Flex>
    </>
  );
}

export default Music;
