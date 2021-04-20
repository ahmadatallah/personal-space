import nightOwl from '@theme-ui/prism/presets/night-owl.json';

export default {
  initialColorModeName: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'hsl(260, 100%, 57%)',
    secondary: 'hsl(222, 68%, 49%)',
    accent: 'hsl(280, 100%, 57%)',
    muted: 'hsla(240,33,98, 40%)',
    gray: '#555',
    highlight: '#022a4b',
    modes: {
      black: {
        text: '#fff',
        background: '#000',
        primary: '#0ff',
        secondary: 'hsl(173, 36%, 50%)',
        accent: '#f0f',
        muted: 'hsla(0,0,7, 50%)',
        gray: '#888',
      },
      dark: {
        text: '#fff',
        background: 'hsl(180, 5%, 15%)',
        primary: 'hsl(50, 100%, 57%)',
        secondary: 'hsl(52.11, 55.88%, 40.00%)',
        accent: 'hsl(310, 100%, 57%)',
        muted: 'hsla(180, 5%, 5%, 50%)',
        gray: 'hsl(180, 0%, 70%)',
      },
      deep: {
        text: '#fff',
        background: 'hsl(230,25%,18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(21, 83%, 82%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 50%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      hack: {
        text: 'hsl(120, 100%, 75%)',
        background: 'hsl(120, 20%, 10%)',
        primary: 'hsl(120, 100%, 40%)',
        secondary: 'hsl(173, 50%, 40%)',
        accent: 'hsl(120, 100%, 90%)',
        muted: 'hsla(120, 20%, 7%, 50%)',
        gray: 'hsl(120, 20%, 40%)',
      },
      pink: {
        text: 'hsl(350, 80%, 10%)',
        background: 'hsl(350, 100%, 90%)',
        secondary: 'hsl(350, 61%, 50%)',
        primary: 'hsl(350, 100%, 50%)',
        accent: 'hsl(280, 100%, 20%)',
        muted: 'hsla(350, 100%, 88%, 50%)',
        gray: 'hsl(350, 40%, 50%)',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  sizes: {
    container: 768,
    wide: 1280,
  },
  text: {
    heading: {
      fontSize: 5,
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      my: 4,
    },
    small: {
      fontSize: 0,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 2,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
    },
    h1: {
      fontSize: 5,
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      my: 4,
    },
    h2: {
      mt: 4,
      mb: 2,
    },
    h3: {
      // variant: 'text.heading',
      fontSize: 2,
    },
    h4: {
      variant: 'text.heading',
    },
    h5: {
      variant: 'text.heading',
    },
    h6: {
      variant: 'text.heading',
    },
    p: {
      lineHeight: 1.5,
      code: {
        color: 'secondary',
      },
    },
    a: {
      color: 'secondary',
      ':hover': {
        cursor: 'pointer',
        transition: 'scale(1.05)',
        color: 'secondary',
      },
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      py: 2,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      py: 2,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      fontWeight: 'bold',
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: '4px solid',
    },
    div: {
      '&.footnotes': {
        variant: 'text.small',
      },
    },
    navlink: {
      variant: 'text.caps',
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      },
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    pre: {
      ...nightOwl,
      boxSizing: 'border-box',
      fontFamily: 'monaco, monospace',
      whiteSpace: 'pre',
      wordWrap: 'break-word',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      overflow: 'auto',
      py: 3,
      fontFeatureSettings: 'normal',
      textAlign: 'left',
      overflowWrap: 'normal',
      lineHeight: '1.5',
      marginBottom: '0px',
      tabSize: 4,
      hyphens: 'none',
      borderRadius: '10px',
      '.highlight': {
        backgroundColor: 'highlight',
        borderWidth: '10px',
        borderLeft: 'solid',
        borderColor: 'primary',
        mr: '-10rem',
        ml: -3,
      },
    },
    code: {
      fontFamily: 'monospace',
      px: 3,
      color: 'secondary',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
  },
};
