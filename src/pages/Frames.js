/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useCallback, useEffect } from "react";
import { H1, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../utils/constants";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import debounce from "../utils/debounce";
import Gallery from "react-photo-gallery";
import Loading from "../components/Loading";

function Frames({ ...props }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const TOTAL_PAGES = 2;
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { textColor } = useEveryReloadColorMode();

  // TODO handle this initial value based on innerWidth
  let initialLength = 45;
  const [images, setImages] = useState(photos.slice(0, initialLength));

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
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
        <Gallery photos={images} onClick={openLightbox} />
        {!loadedAll && (
          <Flex flexDirection="row" justifyContent="center">
            <H2 fontWeight={300} mr={2}>
              {" "}
              Loading{" "}
            </H2>
            <Loading type="spokes" color="currentcolor" />
          </Flex>
        )}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal
              onClose={closeLightbox}
              styles={{
                positioner: base => ({
                  ...base,
                  display: "block",
                  zIndex: 1000
                }),
              }}
            >
              <Carousel
                styles={{
                  header: base => ({
                    ...base,
                    opacity: 0.8,
                    backgroundColor: `black !important`,
                    height: '90px'
                  }),
                  headerClose: base => ({
                    ...base,
                    color: 'white',
                  }),
                  headerFullscreen: base => ({
                    ...base,
                    color: 'white',
                  }),
                }}
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
