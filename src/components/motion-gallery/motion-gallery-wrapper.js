/** @jsx jsx */
import { jsx } from 'theme-ui';
import MotionGallery from './motion-gallery';

const MotionGalleryWrapper = ({ videos, ...props }) => {
  return (
    <div className="motion-gallery-wrapper">
      <style>{`
        .motion-gallery-wrapper video {
          pointer-events: all;
        }
      `}</style>

      <MotionGallery videos={videos} {...props} />
    </div>
  );
};

export default MotionGalleryWrapper;
