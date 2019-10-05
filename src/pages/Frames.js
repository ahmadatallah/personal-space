/** @jsx jsx */
import jsx from "../jsx";
import React, { useState, useCallback, lazy, Suspense } from "react";
import { H1, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/constants";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import useEveryReloadColorMode from '../hooks/useEveryReloadColorMode';


const Gallery = lazy(() => import("react-photo-gallery"));
function Frames({ ...props }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { textColor } = useEveryReloadColorMode();

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
          <H1 fontWeight={600} color={textColor}>
            Frames
          </H1>
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
