/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby';

const MotionGallery = ({ videos, ...props }) => {
  const handleVideoClick = (video, index) => {
    const slug = video.name.replace(/\.[^/.]+$/, '');
    navigate(`/motion/${slug}`);
  };

  return (
    <div
      sx={{
        display: 'grid',
        mt: 2,
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 1,
        ...props.sx,
      }}
    >
      {videos.map((video, index) => (
        <div
          key={index}
          onClick={() => handleVideoClick(video, index)}
          sx={{
            position: 'relative',
            cursor: 'pointer',
            overflow: 'hidden',
            backgroundColor: 'muted',
            aspectRatio: '16 / 9',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              '& .play-overlay': {
                opacity: 1,
              },
              '& video': {
                transform: 'scale(1.05)',
              },
            },
          }}
        >
          <video
            src={video.publicURL}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            muted
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
          />

          <div
            className="play-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          >
            <div
              sx={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                sx={{ marginLeft: '3px' }}
              >
                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotionGallery;
