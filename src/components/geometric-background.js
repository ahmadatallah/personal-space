/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';

export function GeometricBackground(props) {
  const { theme, colorMode } = useThemeUI();

  const currentColors =
    colorMode === 'light'
      ? theme.colors
      : theme.colors?.modes?.[colorMode] || theme.colors;

  // Determine if background is dark and adjust pattern colors accordingly
  const isLightMode = colorMode === 'light';
  const isDarkBackground =
    colorMode === 'black' ||
    colorMode === 'dark' ||
    colorMode === 'deep' ||
    colorMode === 'hack';
  const isBrightBackground = colorMode === 'light' || colorMode === 'pink';

  // Get theme-aware colors with proper contrast
  const getPatternColors = () => {
    if (isBrightBackground) {
      // Bright backgrounds - use dark, saturated theme-specific colors
      let brightColors;

      if (colorMode === 'light') {
        brightColors = {
          primary: 'hsl(260, 100%, 45%)', // deep purple
          secondary: 'hsl(222, 68%, 35%)', // deep blue
          accent: 'hsl(280, 100%, 45%)', // deep magenta
        };
      } else if (colorMode === 'pink') {
        brightColors = {
          primary: 'hsl(350, 80%, 25%)', // deep red
          secondary: 'hsl(348, 83%, 40%)', // bright red-pink
          accent: 'hsl(346, 86%, 45%)', // deep pink
        };
      } else {
        // Fallback for any other bright mode
        brightColors = {
          primary: currentColors.primary || '#000',
          secondary: currentColors.secondary || '#666',
          accent: currentColors.accent || '#333',
        };
      }

      return {
        ...brightColors,
        opacity: 0.15,
        strokeOpacity: 0.25,
      };
    } else if (isDarkBackground) {
      // Dark backgrounds - use bright theme-specific colors
      let brightColors;

      if (colorMode === 'black') {
        brightColors = {
          primary: '#0ff', // cyan
          secondary: '#f0f', // magenta
          accent: '#fff', // white
        };
      } else if (colorMode === 'dark') {
        brightColors = {
          primary: 'hsl(50, 100%, 57%)', // bright yellow
          secondary: 'hsl(310, 100%, 57%)', // bright magenta
          accent: '#fff', // white
        };
      } else if (colorMode === 'deep') {
        brightColors = {
          primary: 'hsl(260, 100%, 80%)', // bright purple
          secondary: 'hsl(21, 83%, 82%)', // bright orange
          accent: 'hsl(290, 100%, 80%)', // bright pink
        };
      } else if (colorMode === 'hack') {
        brightColors = {
          primary: 'hsl(120, 100%, 75%)', // bright green text
          secondary: 'hsl(120, 100%, 90%)', // very bright green accent
          accent: 'hsl(173, 50%, 60%)', // bright teal
        };
      } else {
        // Fallback for any other dark mode
        brightColors = {
          primary: currentColors.text || '#fff',
          secondary: currentColors.primary || '#fff',
          accent: currentColors.accent || '#fff',
        };
      }

      return {
        ...brightColors,
        opacity: 0.5,
        strokeOpacity: 0.7,
      };
    } else {
      // Other modes - use theme colors
      return {
        primary: currentColors.primary || currentColors.text || '#000',
        secondary: currentColors.secondary || currentColors.primary || '#666',
        accent: currentColors.accent || currentColors.text || '#333',
        opacity: 0.12,
        strokeOpacity: 0.18,
      };
    }
  };

  // Mandala-inspired radial pattern with theme-aware colors
  const createMandalaPattern = () => {
    const colors = getPatternColors();

    return `data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(200,200)'%3E%3C!-- Outer ring of petals --%3E%3Cg%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(45)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(90)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(135)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(180)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(225)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(270)'/%3E%3Cpath d='M0,-150 Q30,-120 0,-90 Q-30,-120 0,-150' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(315)'/%3E%3C/g%3E%3C!-- Middle ring --%3E%3Ccircle cx='0' cy='0' r='80' fill='none' stroke='${encodeURIComponent(
      colors.accent
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }'/%3E%3Ccircle cx='0' cy='0' r='60' fill='none' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.5' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }'/%3E%3C!-- Islamic Rosette Center inspired by carved stone --%3E%3Cg%3E%3C!-- Outer rosette petals (16 petals) --%3E%3Cg%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(22.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(45)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(67.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(90)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(112.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(135)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(157.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(180)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(202.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(225)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(247.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(270)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(292.5)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(315)'/%3E%3Cpath d='M0,-45 Q8,-35 0,-25 Q-8,-35 0,-45' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.2}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(337.5)'/%3E%3C/g%3E%3C!-- Inner ring of smaller petals (12 petals) --%3E%3Cg%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(30)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(60)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(90)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(120)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(150)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(180)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(210)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(240)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(270)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(300)'/%3E%3Cpath d='M0,-20 Q4,-15 0,-10 Q-4,-15 0,-20' fill='${encodeURIComponent(
      colors.primary
    )}' fill-opacity='${colors.opacity * 1.5}' stroke='${encodeURIComponent(
      colors.secondary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity
    }' transform='rotate(330)'/%3E%3C/g%3E%3C!-- Center circle with radiating lines --%3E%3Ccircle cx='0' cy='0' r='8' fill='${encodeURIComponent(
      colors.accent
    )}' fill-opacity='${colors.opacity * 1.8}' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.3' stroke-opacity='${
      colors.strokeOpacity
    }'/%3E%3Cg%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(45)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(90)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(135)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(180)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(225)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(270)'/%3E%3Cline x1='0' y1='-6' x2='0' y2='-4' stroke='${encodeURIComponent(
      colors.primary
    )}' stroke-width='0.2' stroke-opacity='${
      colors.strokeOpacity * 0.8
    }' transform='rotate(315)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  };

  return (
    <div
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        minHeight: [300, 300, 400],
        minWidth: [300, 300, 400],
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          right: '-50px',
          bottom: '-50px',
          backgroundImage: `url("${createMandalaPattern()}")`,
          backgroundSize: ['400px 400px', '400px 400px', '500px 500px'],
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          animation: 'gentleRotate 120s linear infinite',
          zIndex: 2,
          opacity: [0.8, 0.9, 1],
        },
        '@keyframes gentleRotate': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      }}
    >
      <div
        sx={{
          position: 'relative',
          zIndex: 1000,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

// Simplified version for subtle use
export function SubtleIslamicPattern(props) {
  const { theme, colorMode } = useThemeUI();

  const currentColors =
    colorMode === 'light'
      ? theme.colors
      : theme.colors?.modes?.[colorMode] || theme.colors;

  const createSimpleStarPattern = () => {
    const isLightMode = colorMode === 'light';
    const isDarkBackground =
      colorMode === 'black' ||
      colorMode === 'dark' ||
      colorMode === 'deep' ||
      colorMode === 'hack';
    const isBrightBackground = colorMode === 'light' || colorMode === 'pink';

    let patternColor, opacity;

    if (isBrightBackground) {
      // Use dark, saturated theme-specific colors for bright backgrounds
      if (colorMode === 'light') {
        patternColor = 'hsl(260, 100%, 45%)'; // deep purple
        opacity = 0.08;
      } else if (colorMode === 'pink') {
        patternColor = 'hsl(350, 80%, 25%)'; // deep red
        opacity = 0.08;
      } else {
        // Fallback
        patternColor = currentColors.primary || '#000';
        opacity = 0.04;
      }
    } else if (isDarkBackground) {
      // Use bright theme-specific colors for each dark mode
      if (colorMode === 'black') {
        patternColor = '#0ff'; // cyan
        opacity = 0.2;
      } else if (colorMode === 'dark') {
        patternColor = 'hsl(50, 100%, 57%)'; // bright yellow
        opacity = 0.2;
      } else if (colorMode === 'deep') {
        patternColor = 'hsl(260, 100%, 80%)'; // bright purple
        opacity = 0.2;
      } else if (colorMode === 'hack') {
        patternColor = 'hsl(120, 100%, 75%)'; // bright green
        opacity = 0.2;
      } else {
        // Fallback
        patternColor = currentColors.text || '#fff';
        opacity = 0.15;
      }
    } else {
      patternColor = currentColors.primary || currentColors.text || '#000';
      opacity = 0.06;
    }

    return `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(50,50)'%3E%3Cpath d='M0,-25 L7,-7 L25,-7 L12,3 L18,20 L0,12 L-18,20 L-12,3 L-25,-7 L-7,-7 Z' fill='${encodeURIComponent(
      patternColor
    )}' fill-opacity='${opacity}' stroke='${encodeURIComponent(
      patternColor
    )}' stroke-width='0.3' stroke-opacity='${
      opacity * 2
    }'/%3E%3C/g%3E%3C/svg%3E`;
  };

  return (
    <div
      sx={{
        position: 'relative',
        backgroundImage: `url("${createSimpleStarPattern()}")`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {props.children}
    </div>
  );
}
