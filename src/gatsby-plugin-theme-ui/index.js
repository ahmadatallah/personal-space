import nightOwl from '@theme-ui/prism/presets/night-owl.json';

export default {
  initialColorModeName: 'light',
  colors: {
    text: '#1a1a1a',
    background: '#fdfdfd',
    primary: 'hsl(260, 95%, 60%)',
    secondary: 'hsl(222, 65%, 52%)',
    accent: 'hsl(280, 95%, 60%)',
    muted: 'hsl(180, 16%, 66%, 45%)',
    gray: '#4a4a4a',
    highlight: '#033454',
    modes: {
      black: {
        text: '#f8f8f8',
        background: '#0a0a0a',
        primary: '#00e5ff',
        secondary: 'hsl(173, 40%, 55%)',
        accent: '#e600e6',
        muted: 'hsla(244, 28%, 25%, 45%)',
        gray: '#999',
      },
      dark: {
        text: '#f5f5f5',
        background: 'hsl(180, 6%, 16%)',
        primary: 'hsl(50, 98%, 60%)',
        secondary: 'hsl(52, 58%, 43%)',
        accent: 'hsl(310, 98%, 60%)',
        muted: 'hsla(180, 6%, 8%, 45%)',
        gray: 'hsl(180, 0%, 75%)',
      },
      deep: {
        text: '#f8f8f8',
        background: 'hsl(230, 28%, 19%)',
        primary: 'hsl(260, 98%, 82%)',
        secondary: 'hsl(21, 80%, 84%)',
        accent: 'hsl(290, 98%, 82%)',
        muted: 'hsla(230, 22%, 5%, 45%)',
        gray: 'hsl(210, 52%, 65%)',
      },
      hack: {
        text: '#68d391',
        background: '#171923',
        primary: '#48bb78',
        secondary: '#38b2ac',
        accent: '#9ae6b4',
        muted: 'rgba(45, 55, 72, 0.5)',
        gray: '#4a5568',
      },
      pink: {
        text: '#4a1a35',
        background: '#fff5f7',
        primary: '#b91c1c',
        secondary: '#ed64a6',
        accent: '#d97979',
        muted: 'rgba(237, 100, 166, 0.2)',
        gray: '#97266d',
      },
    },
  },
  fonts: {
    body: 'Ubuntu,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif',
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
    body: {
      backgroundColor: 'background',
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
      ':hover,:focus': {
        color: 'primary',
      },
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: [0, 1, 2, 3],
    },
    shortcut: {
      variant: 'styles.navlink',
      fontSize: '14px',
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
