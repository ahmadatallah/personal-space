/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { H1, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/constants";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { modes } from "../utils/constants";
import { useColorMode } from "theme-ui";
import theme from "../theme"

const Gallery = lazy(() => import("react-photo-gallery"));
function Frames({ ...props }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  const [textColor, changeTextTheme] = useState();

  const populateTheme = colorTheme => {
    const i = modes.indexOf(colorTheme);
    const n = (i + 1) % modes.length;
    const currentMode = modes[n];
    changeTextTheme(theme.colors.modes[currentMode].secondary);
    setColorMode(currentMode);
  };

  useEffect(() => {
    populateTheme(colorMode);

    return () => {
      populateTheme("light");
    };
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <Header />
      <Flex flexDirection="column" px={[3, 4, 5]} py={2} mx="auto" mt={65}>
        <Div ml={1}>
          <H1 fontWeight={600} color={textColor}>Frames</H1>
        </Div>
        <Suspense
          fallback={
            <Flex
              flexDirection="column"
              justifyContent="center"
              mt={[200, 300, 350]}
            >
              <H2 fontWeight={300}> Loading .... </H2>
            </Flex>
          }
        >
          <Gallery photos={photos} onClick={openLightbox} />
        </Suspense>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <Footer />
      </Flex>
    </>
  );
}

export default Frames;
