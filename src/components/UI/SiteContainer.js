import React from 'react'
import styled from 'styled-components'

const SiteContainer = props => {
  return (
    <Container>
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  )
}

export default SiteContainer

const Container = styled.div`
  border: 0.75rem solid #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  z-index: 10000;
`

const ContentContainer = styled.div`
  background: var(--ivory);
  display: flex;
`
