/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useCallback, useEffect } from 'react';
import { A, H1, H2, Div } from '../elements';
import Flex from './Flex';
import Carousel, { Modal, ModalGateway } from 'react-images';
import useColorMode from '../hooks/useColorMode';
import debounce from '../utils/debounce';
import Gallery from 'react-photo-gallery';
import Loading from '../components/Loading';
import Frame from '../assets/images/frame.png';
import { useThemeUI } from 'theme-ui';

function Collage({
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
  const { theme, colorMode } = useThemeUI();
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
    const handleScroll = () => {
      let scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
        loadMorePhotos();
      }
    };
    if (!disallowScrollLoad) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [disallowScrollLoad, loadMorePhotos]);

  const carouselStyle = {
    footer: base => ({
      ...base,
      paddingTop: 30,
      background: 'none !important',
      '& a': {
        color: 'black',
      },
    }),
    header: base => ({
      ...base,
      background: 'none !important',
      maxHeight: '100px',
      display: 'flex !important',
      right: 13,
      bottom: 80,
    }),
    navigation: base => ({
      ...base,
      top: '50%',
      display: 'flex',
      width: '100%',
      position: 'absolute',
      '& button': {
        ':hover': {
          transition: 'background 0.5s ease-out',
          background: `${theme.colors.modes[colorMode].secondary}`,
        },
      },
      '& button[title = "Previous (left arrow)"]': {
        left: 'calc(50% - 30rem)',
      },
      '& button[title = "Next (right arrow)"]': {
        right: 'calc(50% - 30rem)',
      },
    }),
    headerClose: base => ({
      ...base,
      color: 'white',
      ':hover': { color: theme.colors.modes[colorMode].secondary },
    }),
    headerFullscreen: base => ({
      ...base,
      color: 'white',
      ':hover': {
        color: theme.colors.modes[colorMode].secondary,
      },
    }),
    view: base => ({
      ...base,
    }),
  };

  const View = props => {
    const overScanCount = 1;
    // transparent pixel: http://png-pixel.com/
    const pixel = {
      source:
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
    };
    const { data, getStyles, index, currentIndex } = props;
    const inBounds = Math.abs(currentIndex - index) <= overScanCount;

    const pixelData = inBounds ? data : pixel;
    const { alt, src } = pixelData;
    return inBounds ? (
      <Div
        css={{
          ...getStyles('view', props),
        }}
      >
        <img
          alt={alt || `Image ${index}`}
          src={src}
          css={{
            height: 'auto',
            userSelect: 'none',
            maxHeight: '80vh',
            maxWidth: '90vw',
            borderColor: '#fff',
            borderStyle: 'solid',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255p',
            borderWidth: '28px 28px 28px 28px',
            borderImage: `url(${Frame}) 63 61 62 61 stretch stretch`,
          }}
        />
      </Div>
    ) : null;
  };
  return (
    <>
      {href ? (
        <A
          fontWeight={600}
          mb={2}
          fontSize={[2, 3, 4]}
          color={textColor}
          href={`#${href}`}
        >
          {title}
        </A>
      ) : (
        <H1 fontWeight={600} fontSize={4} color={textColor}>
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
      <Div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal
              onClose={closeLightbox}
              styles={{
                positioner: base => ({
                  ...base,
                  zIndex: 1200,
                }),
              }}
            >
              <Carousel
                styles={carouselStyle}
                currentIndex={currentImage}
                components={{ View }}
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

export default Collage;
