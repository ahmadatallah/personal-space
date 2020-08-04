/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from 'theme-ui';
import styled from '@emotion/styled';

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

function Link({ title, to, ...props }) {
  return (
    <StyledLink to={to}>
      <Text
        sx={{
          fontSize: '1.5em',
          mb: '1rem',
          mt: '1rem',
        }}
        variant="grow"
      >
        {title}
      </Text>
    </StyledLink>
  );
}

export default Link;
