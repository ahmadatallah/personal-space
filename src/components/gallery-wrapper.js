/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Gallery from '@browniebroke/gatsby-image-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GalleryWrapper = ({ images, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = () => {
    setIsOpen(true);
    setPhotoIndex(0);
  };

  // Extract the full-size images for the lightbox
  const fullImages = images.map(
    (img) => img.full?.images?.fallback?.src || img.full?.src || ''
  );

  return (
    <div className="gallery-wrapper">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <button
          onClick={openLightbox}
          title="Open Preview"
          sx={{
            padding: 2,
            bg: 'transparent',
            color: 'text',
            borderWidth: '2px',
            borderColor: 'text',
            borderStyle: 'solid',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            '&:hover': {
              borderColor: 'secondary',
            },
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="7" y="7" width="10" height="10" rx="1" />
            <path d="M19 3h4v4" />
            <path d="M5 21h-4v-4" />
          </svg>
        </button>
      </div>
      <Gallery images={images} {...props} />

      {isOpen && fullImages.length > 0 && (
        <Lightbox
          mainSrc={fullImages[photoIndex]}
          nextSrc={fullImages[(photoIndex + 1) % fullImages.length]}
          prevSrc={
            fullImages[(photoIndex + fullImages.length - 1) % fullImages.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + fullImages.length - 1) % fullImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % fullImages.length)
          }
          imageCaption={images[photoIndex]?.caption}
        />
      )}
    </div>
  );
};

export default GalleryWrapper;
