/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Logo from '../components/Logo'
import Container from '../components/Container'
import { H1 } from '../elements';

function NotFound() {
  return (
      <div>
          <H1 color="red"> Not Found </H1>
      </div>
  )
}

export default NotFound
