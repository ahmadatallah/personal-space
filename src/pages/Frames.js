/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useCallback, lazy, Suspense } from "react";
import { H1, H2, Div } from "../elements";
import ColorModeApplier from "../containers/ColorModeApplier";
import Flex from "../components/Flex";
import { useColorMode } from "theme-ui";
import { modes } from "../utils/constants";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/constants";

const Gallery = lazy(() => import("react-photo-gallery"));
function Frames({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
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
      <Flex flexDirection="column" px={5} py={2} mx="auto">
        <Div ml={1}>
          <H1 fontWeight={300}>Photography</H1>
        </Div>
        <Suspense
          fallback={
            <>
              <Flex flexDirection="column" px={5} py={2} mx="auto">
                <Div ml={1}>
                    <H2 fontWeight={300}> Loading .... </H2>
                </Div>
              </Flex>
            </>
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
      </Flex>
    </>
  );
}

export default Frames;
