/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Avatar } from 'theme-ui';

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
      src="https://live.staticflickr.com/65535/50815637242_10c60d8c08_c.jpg"
      borderRadius="50%"
      mr={2}
      size={size}
    />
  </div>
);
