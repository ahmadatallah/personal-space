/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useCallback, lazy, Suspense, useEffect } from "react";
import { H1, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/constants";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import debounce from "../utils/debounce";
import Loading from "../components/Loading";

const Gallery = lazy(() => import("react-photo-gallery"));

function Frames({ ...props }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState(photos.slice(0, 6));
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const TOTAL_PAGES = 3;
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

  const loadMorePhotos = debounce(() => {
    if (pageNum > TOTAL_PAGES) {
      setLoadedAll(true);
      return;
    }

    setImages(images.concat(photos.slice(images.length, images.length + 6)));
    setPageNum(pageNum + 1);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
      loadMorePhotos();
    }
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
              mb={[200, 300, 350]}
            >
              <H2 fontWeight={300} mr={1}> Loading  </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          }
        >
          <Gallery photos={images} onClick={openLightbox} />
          {!loadedAll && (
            <Flex flexDirection="row" justifyContent="center">
              <H2 fontWeight={300} mr={2}> Loading </H2>
              <Loading type="spokes" color="currentcolor" />
            </Flex>
          )}
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
      <Footer />
    </>
  );
}

export default Frames;
