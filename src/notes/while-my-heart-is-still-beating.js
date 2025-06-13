/** @jsx jsx */
import { jsx } from 'theme-ui';
import background from '../images/while-my-heart-is-still-beating-bg.svg';
import { Fragment } from 'react';

const WhileMyHeartIsStillBeating = () => {
  return (
    <Fragment>
      <p
        sx={{
          textAlign: ['center', 'left'],
          fontSize: [2, 3],
          lineHeight: 1.6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        All of those people <br />
        Everywhere <br />
        Ever so needing <br />
        Where's it all leading <br />
        Tell me where <br />
        Nothing insincere <br />
        I'd better have pity <br />
        I'd better go easy <br />
        I never will lay down <br />
        While my heart is still beating <br />
        Where's it all leading <br />
        Walk on air <br />
        Am I still dreaming <br />
        Words to spare <br />
        Lost in their meaning <br />
        I'd better be strong now <br />
        I'd better stop dreaming <br />
        My heart has flown away now <br />
        Will it never stop bleeding? <br />
        <a
          href="https://youtu.be/IMpUok2sKOE?feature=shared"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: 1,
            fontStyle: 'italic',
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Roxy Music
        </a>
      </p>
      <div
        sx={{
          position: 'absolute',
          top: '20%',
          right: [0, 'auto'], // 0 on small, 'auto' on large
          left: ['auto', '50%'], // 'auto' on small, '50%' on large
          transform: 'translate(-50%, -50%)',
          width: ['100px', '300px', '600px'],
          aspectRatio: [1 / 6, 1 / 2, 1 / 1],
          background: `url(${background})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          zIndex: 0,
          animation: 'ripple 3s ease-in-out infinite',
          '@keyframes ripple': {
            '0%': {
              transform: 'scale(1)',
              opacity: 0.8,
            },
            '50%': {
              transform: 'scale(1.2)',
              opacity: 0.4,
            },
            '100%': {
              transform: 'scale(1)',
              opacity: 0.8,
            },
          },
        }}
      ></div>
    </Fragment>
  );
};

export default WhileMyHeartIsStillBeating;
