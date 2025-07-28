/** @jsx jsx */
import { jsx } from 'theme-ui';
import { LightboxProvider, useLightbox } from './lightbox-context';
import LightboxGallery from './lightbox-gallery';

const GalleryWrapperContent = ({ images, ...props }) => {
  const { openLightbox } = useLightbox();

  return (
    <div className="gallery-wrapper">
      <style>{`
        /* Completely hide the react-image-lightbox modal */
        .ReactModal__Overlay {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 3,
          position: 'relative',
          zIndex: 10,
        }}
      >
        <button
          onClick={() => openLightbox(images, 0)}
          title="Open Gallery"
          sx={{
            padding: 2,
            bg: 'transparent',
            color: 'text',
            border: '2px solid',
            borderColor: 'text',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: 'primary',
              color: 'primary',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>

      <LightboxGallery images={images} {...props} />
    </div>
  );
};

const GalleryWrapper = ({ images, ...props }) => {
  return (
    <LightboxProvider>
      <GalleryWrapperContent images={images} {...props} />
    </LightboxProvider>
  );
};

export default GalleryWrapper;
