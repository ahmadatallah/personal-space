/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useCallback, useEffect } from 'react';
import { A, H1, H2, Div } from '../elements';
import Flex from '../components/Flex';
import Carousel, { Modal, ModalGateway } from 'react-images';
import useColorMode from '../hooks/useColorMode';
import debounce from '../utils/debounce';
import Gallery from 'react-photo-gallery';
import Loading from '../components/Loading';

function Frames({
  title,
  href,
  totalPages,
  initialLength,
  photos,
  disallowScrollLoad,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { textColor } = useColorMode();

  // TODO handle this initial value based on innerWidth
  const [images, setImages] = useState(photos.slice(0, initialLength));

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const loadMorePhotos = debounce(() => {
    if (pageNum > totalPages) {
      setLoadedAll(true);
      return;
    }

    setImages(images.concat(photos.slice(images.length, images.length + 6)));
    setPageNum(pageNum + 1);
  }, 200);

  useEffect(() => {
    if (!disallowScrollLoad) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
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

  const carouselStyle = {
    footer: base => ({
      ...base,
      paddingTop: 30,
    }),
    header: base => ({
      ...base,
      background: 'none !important',
      paddingBottom: 100,
      maxHeight: '100px',
      display: 'flex !important',
      right: 13,
      top: '30%',
      bottom: 80,
      '& span': {
        backgroundColor: 'rgba(255,255,255,0.2) !important',
        display: 'flex !important',
        flexDirection: 'column',
        botom: 0,
        left: 0,
      },
    }),
    headerClose: base => ({
      ...base,
      color: 'white',
    }),
    headerFullscreen: base => ({
      ...base,
      color: 'white',
    }),
  };

  return (
    <>
      {href ? (
        <A
          fontWeight={600}
          mb={2}
          fontSize={30}
          color={textColor}
          href={`#${href}`}
        >
          {title}
        </A>
      ) : (
        <H1 fontWeight={600} color={textColor}>
          {title}
        </H1>
      )}
      <Gallery photos={images} onClick={openLightbox} />
      {!loadedAll && !disallowScrollLoad && (
        <Flex>
          <H2 fontWeight={300} mr={2}>
            {' '}
            Loading{' '}
          </H2>
          <Loading type="spokes" color="currentcolor" />
        </Flex>
      )}
      <Div pl={[4, 4, 6]} pr={[4, 4, 6]}>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal
              onClose={closeLightbox}
              styles={{
                positioner: base => ({
                  ...base,
                  zIndex: 100,
                }),
              }}
            >
              <Carousel
                styles={carouselStyle}
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Div>
    </>
  );
}

export default Frames;
