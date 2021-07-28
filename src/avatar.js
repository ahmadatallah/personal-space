/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Avatar } from 'theme-ui';
import AvatarImage from './images/avatar.png';

export default ({ size = 64, ...props }) => (
  <div
    {...props}
    sx={{
      width: size,
      height: size,
      borderRadius: 9999,
      bg: 'white',
    }}
  >
    <Avatar
      alt="avatar"
      id="avatar"
      src={AvatarImage}
      borderRadius="50%"
      mr={2}
      size={size}
    />
  </div>
);
