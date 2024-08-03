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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(20ch, 1fr))',
      rowGap: '24px',
      maxWidth: '100vw',
      width: '100%',
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
        boxShadow: `-2px 0px 10px ${theme.colors.primary}, -10px 0px 5px ${theme.colors.accent}`,
        pb: '1rem',
        ml: 3,
        maxHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        overflow: 'hidden',
        backdropFilter: 'contrast(0.77)',
        div: {
          img: {
            borderRadius: '0.5rem 0.5rem 0 0',
            width: '100%',
            OObjectFit: 'cover',
            objectFit: 'cover',
          },
        },
        small: {
          mr: 'auto',
          ml: 3,
          fontSize: '0.7rem',
          color: 'background',
          backgroundColor: 'primary',
          borderRadius: '2px',
          px: 1,
        },
        transition: 'all .2s ease-in-out',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: `0px 0px 32px ${theme.colors.accent}`,
          zIndex: 100,
        },
        label: {
          maxWidth: '184px',
          color: 'text',
          fontSize: '0.8rem',
        },
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
