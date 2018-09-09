import React from 'react'
import styled from 'styled-components'
import theme from '../theme/config'
import { Avatar, Heading, Text, Box, Flex } from '@hackclub/design-system'

const Base = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.radii[2]};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
`
Base.defaultProps = {
  bg: 'white',
  p: [3, 4],
  mx: [-3, -4]
}

const Location = ({ address }) => (
  <Base my={4}>
    <Heading.h2>Your polling location</Heading.h2>
  </Base>
)

export default Location