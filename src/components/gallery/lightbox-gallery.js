/** @jsx jsx */
import { jsx } from 'theme-ui';
import Gallery from '@browniebroke/gatsby-image-gallery';
import { useLightbox } from './lightbox-context';

const LightboxGallery = ({ images, ...props }) => {
  const { openLightbox } = useLightbox();

  const handleClick = (index) => {
    openLightbox(images, index);
  };

  return (
    <div
      sx={{
        '& [data-gatsby-image-wrapper]': {
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
        },
        '& [data-placeholder-image]': {
          opacity: '1 !important',
          filter: 'blur(0px) !important',
        },
        '& .gatsby-image-wrapper::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at center, var(--bg-color, rgba(0,0,0,0.1)) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '& .gatsby-image-wrapper[data-placeholder-image]::before': {
          opacity: 1,
        },
      }}
    >
      <style>{`
        .gatsby-image-wrapper[style*="background-color"] {
          --bg-color: var(--gatsby-placeholder-bg);
        }
        .gatsby-image-wrapper::before {
          background: radial-gradient(circle at center,
            var(--bg-color, rgba(0,0,0,0.1)) 0%,
            rgba(0,0,0,0.05) 50%,
            transparent 100%) !important;
        }
      `}</style>
      <Gallery
        images={images}
        onClickImage={handleClick}
        lightboxOptions={{
          // Disable the built-in lightbox
          imagePadding: 0,
        }}
        {...props}
      />
    </div>
  );
};

export default LightboxGallery;
