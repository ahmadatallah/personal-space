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
      mt: 5,
      ml: 4,
      height: '300px',
      width: '600px',
      left: 'calc(50% - 300px)',
      display: 'flex',
    }}
  >
    {props.children}
  </div>
);

export const Card = (props) => {
  const { theme } = useThemeUI();
  return (
    <div
      className="card"
      sx={{
        borderRadius: '0.5rem',
        boxShadow: `-10px 0px 10px ${theme.colors.primary}, -30px 0px 5px ${theme.colors.accent}`,
        pb: '1rem',
        transition: '0.4s ease-out',
        width: '100%',
        position: 'relative',
        minWidth: '300px',
        overflow: 'hidden',
        backgroundColor: 'white',
        div: {
          img: {
            borderRadius: '0.5rem 0.5rem 0 0',
            width: '100%',
            '-o-object-fit': 'cover',
            'object-fit': 'cover',
          },
        },

        h3: {
          mt: '1rem',
          mx: '1.2rem',
          color: '#000',
          fontSize: '1.0rem',
        },
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
