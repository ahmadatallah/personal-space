/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';

export const Banner = (props) => (
  <div
    sx={{
      pb: [1, 2, 3],
      fontWeight: 'bold',
      ul: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        p: 0,
        m: 'auto',
      },
      li: {
        mr: 3,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    }}
  >
    {props.children}
  </div>
);

export const Container = ({ wide, ...props }) => (
  <div
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}
  >
    {props.children}
  </div>
);

export const Tiles = (props) => (
  <div
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [0, 2, 2],
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      h2: {
        fontSize: 2,
      },
      img: {
        display: 'block',
        width: 128,
        maxWidth: '100%',
        height: 'auto',
        m: 'auto',
      },
      a: {
        variant: 'styles.navlink',
      },
      h3: {
        my: 1,
      },
      ...props.sx,
    }}
  >
    {props.children}
  </div>
);

export const List = (props) => (
  <div
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: 4,
      },
      a: {
        variant: 'styles.navlink',
        fontWeight: 'bold',
      },
      py: 1,
      fontSize: 1,
    }}
  >
    {props.children}
  </div>
);

export const CardWrapper = (props) => (
  <div
    sx={{
      padding: 0,
      mt: 3,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(20ch, 1fr))',
      gridGap: '1.5rem',
      maxWidth: '100vw',
      width: '100%',
    }}
  >
    {props.children}
  </div>
);

export const Card = (props) => {
  const theme = useThemeUI();
  return (
    <div
      sx={{
        '--card-gradient': `rgba(0, 0, 0, 0.7), ${theme.theme.colors.secondary}`,
        '--card-blend-mode': 'hard-light',
        borderRadius: '0.5rem',
        boxShadow: '0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)',
        pb: '1rem',
        width: '100%',
        backgroundImage:
          'linear-gradient(var(--card-gradient), white max(10rem, 27vh))',
        overflow: 'hidden',
        backgroundColor: 'white',
        div: {
          img: {
            borderRadius: '0.5rem 0.5rem 0 0',
            width: '100%',
            '-o-object-fit': 'cover',
            'object-fit': 'cover',
            maxHeight: [
              'max(2rem, 40vh)',
              'max(2rem, 30vh)',
              'max(2rem, 30vh)',
            ],
            aspectRatio: 4 / 3,
            mixBlendMode: 'var(--card-blend-mode)',
          },
        },
        h3: {
          mt: '1rem',
          mx: '1rem',
          color: '#000',
          fontSize: '1.0rem',
        },
        ':hover': {
          '--card-blend-mode': 'none',
          cursor: 'pointer',
        },
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
