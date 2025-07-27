/** @jsx jsx */
import { jsx } from 'theme-ui';
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const currentImage = images[currentIndex];
  const imageData = currentImage?.full;
  const image = imageData ? getImage(imageData) : null;
  const imgSrc = imageData?.images?.fallback?.src || imageData?.src || '';

  console.log(
    'Current Image:',
    currentImage,
    'Image Data:',
    imageData,
    'Image:',
    image,
    'Image Source:',
    imgSrc
  );
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
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          bg: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: 5,
          cursor: 'pointer',
          padding: 2,
          transition: 'transform 0.2s ease',
          zIndex: 20,
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
        aria-label="Close lightbox"
      >
        ×
      </button>

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
                'calc(80vh - 60px)',
                'calc(85vh - 60px)',
                'calc(90vh - 60px)',
              ],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (max-width: 768px)': {
                height: 'calc(70vh - 60px)',
              },
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
          gap: 2,
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
              width: ['8px', '10px'],
              height: ['8px', '10px'],
              borderRadius: '50%',
              border: 'none',
              bg: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
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
