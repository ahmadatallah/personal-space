/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { generateRandomBorderRadius } from '../components/border-background';

export function Gradient(props) {
  const { theme } = useThemeUI();

  return (
    <div
      sx={{
        borderRadius: generateRandomBorderRadius(),
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        boxShadow: `2px 2px 0px ${theme.colors.secondary}, 4px 4px 0px ${theme.colors.primary}, 8px 8px 0px ${theme.colors.background}, 10px 10px 0px ${theme.colors.background}, 12px 12px 0px ${theme.colors.primary}, 14px 14px 0px ${theme.colors.secondary}`,
      }}
    >
      {props.children}
    </div>
  );
}
