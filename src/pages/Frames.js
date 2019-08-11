/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useCallback } from "react";
import theme from "../theme";
import Container from "../components/Container";
import { H1, H2, Section, H3, Div, Img } from "../elements";
import ColorModeApplier from "../containers/ColorModeApplier";
import Flex from "../components/Flex";
import Header from "../containers/Header";
import { useColorMode } from "theme-ui";
import { modes } from "../utils/constants";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos, frames } from "../utils/constants";

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
      <>
        <Flex flexDirection="column" ml={3}>
          <Div ml={1}>
            <H1 fontWeight={300}>Photography</H1>
          </Div>
          <Gallery photos={photos} onClick={openLightbox} />
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
    </>
  );
}

export default Frames;
