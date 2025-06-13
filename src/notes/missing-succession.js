/** @jsx jsx */
import { jsx } from 'theme-ui';
import succession from '../images/succession.png';

const MissingSuccession = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 4,
        mt: 4,
      }}
    >
      <div
        sx={{
          backgroundImage: `url(${succession})`,
          backgroundRepeat: ['repeat-y', 'repeat-x'],
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
          backgroundSize: '15%',
          filter: 'blur(0px)',
          fontSize: ['40px', '60px', '100px'],
          width: ['100vw', 'auto'],
          whiteSpace: ['normal', 'nowrap'],
          wordBreak: ['break-word', 'normal'],
          fontStyle: 'normal',
          fontWeight: '900',
          letterSpacing: '0.4em',
          lineHeight: 1,
          mixBlendMode: 'none',
          opacity: 1,
          paddingBottom: '10px',
          paddingTop: '0px',
          paddingRight: '20px',
          animation: [
            'backgroundMove 3s linear infinite',
            'backgroundMove 20s linear infinite',
          ],
          '@keyframes backgroundMove': {
            '0%': {
              backgroundPosition: '0% center',
            },
            '100%': {
              backgroundPosition: '100% center',
            },
          },
          textTransform: 'uppercase',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Succession
      </div>
      <small>
        Family, fortune, envy, jealousy, privilege, passed on legacy, secret,
        sabotage, borderline, felony, suicide, subtract, selfish, pedigree
      </small>
    </div>
  );
};

export default MissingSuccession;
