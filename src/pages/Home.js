/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Container from '../components/Container'
import { H1 } from '../elements';
import Flex from '../components/Flex'
import BlockLinkGrow from '../components/BlockLinkGrow';
import avatar from '../assets/images/avatar.png'
import Avatar from '../components/Avatar'
function Home() {
  return (
    <Container>
      <Flex justifyContent='center'>
        <Avatar src={avatar} borderRadius={100} width={128}></Avatar>
        <BlockLinkGrow  width={890}>
          <H1 fontSize={130} ml={5}>A^Squared</H1>
        </BlockLinkGrow>
      </Flex>
    </Container>
  )
}

export default Home
