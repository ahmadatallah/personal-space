/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import { Link } from 'gatsby';
import Avatar from '../../avatar';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LightboxContext = createContext();

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

const CustomLightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = React.useRef(null);
  // Reset zoom when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prevScale) => {
      const newScale = Math.max(1, Math.min(3, prevScale + delta));
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  }, []);

  const handleMouseDown = useCallback(
    (e) => {
      if (scale > 1) {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      }
    },
    [scale, position]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart, scale]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, handleMouseMove, handleMouseUp]);

  const currentImage = images[currentIndex];
  const imageData = currentImage?.full;
  const image = imageData ? getImage(imageData) : null;
  const imgSrc = imageData?.images?.fallback?.src || imageData?.src || '';

  return (
    <div
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 1000,
        display: 'flex',
        px: 3,
        py: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      {/* Header with close button and zoom controls */}
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 4,
          zIndex: 20,
          backdropFilter: 'blur(5px)',
        }}
      >
        <div />

        {/* Center Content - Zoom Controls + Logo */}
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Zoom Controls */}
          {image && (
            <div
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setScale((prevScale) => {
                    const newScale = Math.min(3, prevScale + 0.2);
                    return newScale;
                  });
                }}
                sx={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  bg: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: 'scale(1.1)',
                  },
                }}
                aria-label="Zoom in"
              >
                +
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setScale((prevScale) => {
                    const newScale = Math.max(1, prevScale - 0.2);
                    if (newScale === 1) {
                      setPosition({ x: 0, y: 0 });
                    }
                    return newScale;
                  });
                }}
                sx={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  bg: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: 'scale(1.1)',
                  },
                }}
                aria-label="Zoom out"
              >
                −
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
                sx={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  bg: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    transform: 'scale(1.1)',
                  },
                }}
                aria-label="Reset zoom"
              >
                ⌂
              </button>
            </div>
          )}

          {/* Logo */}
          <NavLink
            as={Link}
            to="/"
            sx={{
              variant: 'styles.navitem',
              fontSize: 0,
              transform: 'scale(1)',
              color: 'white',
            }}
          >
            <Avatar />
          </NavLink>
        </div>

        {/* Scale Text - Absolutely positioned */}
        {scale > 1 && (
          <div
            sx={{
              position: 'absolute',
              right: '80px', // Position to the left of close button
              fontSize: '12px',
              color: 'white',
              bg: 'rgba(0, 0, 0, 0.7)',
              px: 2,
              py: 1,
              borderRadius: '12px',
              textAlign: 'center',
              minWidth: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Math.round(scale * 100)}%
          </div>
        )}

        {/* Close Button - Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          sx={{
            bg: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: 5,
            cursor: 'pointer',
            padding: 2,
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
          aria-label="Close lightbox"
        >
          ×
        </button>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        sx={{
          position: 'absolute',
          left: 2,
          top: '50%',
          transform: 'translateY(-50%)',
          bg: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: 5,
          cursor: 'pointer',
          padding: 2,
          minWidth: '24px',
          minHeight: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.8,
          transition: 'opacity 0.2s ease',
          zIndex: 10,
          '&:hover': {
            opacity: 1,
          },
          '@media (max-width: 768px)': {
            left: 2,
            fontSize: 4,
          },
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        sx={{
          position: 'absolute',
          right: 2,
          top: '50%',
          transform: 'translateY(-50%)',
          bg: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: 5,
          cursor: 'pointer',
          padding: 2,
          minWidth: '24px',
          minHeight: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.8,
          transition: 'opacity 0.2s ease',
          zIndex: 10,
          '&:hover': {
            opacity: 1,
          },
          '@media (max-width: 768px)': {
            right: 2,
            fontSize: 4,
          },
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          padding: [3, 4],
          '@media (max-width: 768px)': {
            padding: 2,
          },
        }}
      >
        {image ? (
          <div
            sx={{
              width: '100%',
              height: [
                'calc(80vh - 72px)',
                'calc(85vh - 72px)',
                'calc(90vh - 72px)',
              ],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              '@media (max-width: 768px)': {
                height: 'calc(70vh - 60px)',
              },
            }}
            onWheel={handleWheel}
          >
            <div
              ref={imageRef}
              onMouseDown={handleMouseDown}
              sx={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                cursor:
                  scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GatsbyImage
                image={image}
                alt={currentImage?.caption || ''}
                loading="eager"
                objectFit="contain"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  '& img': {
                    objectFit: 'contain !important',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  },
                  '& [data-placeholder-image]': {
                    opacity: '1 !important',
                    background: `radial-gradient(circle at center,
                      ${imageData?.backgroundColor || 'rgba(0,0,0,0.1)'} 0%,
                      rgba(0,0,0,0.05) 50%,
                      transparent 100%) !important`,
                  },
                }}
              />
            </div>
          </div>
        ) : null}
        {currentImage?.caption && (
          <div
            sx={{
              marginTop: 3,
              color: 'white',
              textAlign: 'center',
              fontSize: 1,
              maxWidth: '600px',
              px: 3,
            }}
          >
            {currentImage.caption}
          </div>
        )}
      </div>

      <div
        sx={{
          position: 'absolute',
          bottom: 4,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index);
            }}
            sx={{
              width: '10px',
              height: '10px',
              border: 'none',
              borderRadius: '2px',
              bg:
                index === currentIndex
                  ? 'secondary'
                  : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              aspectRatio: '1',
              '&:hover': {
                bg:
                  index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.6)',
                transform: 'scale(1.1)',
              },
              '@media (max-width: 768px)': {
                width: '6px',
                height: '6px',
              },
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((imageArray, index = 0) => {
    setImages(imageArray);
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigateLightbox = useCallback(
    (direction) => {
      if (typeof direction === 'number') {
        setCurrentIndex(direction);
      } else if (direction === 'prev') {
        setCurrentIndex(
          (prevIndex) => (prevIndex + images.length - 1) % images.length
        );
      } else if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    },
    [images.length]
  );

  const value = {
    openLightbox,
    closeLightbox,
    isOpen,
    currentIndex,
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {isOpen && images.length > 0 && (
        <CustomLightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </LightboxContext.Provider>
  );
};
