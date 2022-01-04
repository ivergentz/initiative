import React from 'react'
import styled from 'styled-components'

const Modal = props => {
  return <Backdrop>{props.children}</Backdrop>
}

export default Modal

const Backdrop = styled.section`
  position: fixed;
  left: 0.85rem;
  width: calc(100vw - 1.7rem);
  height: 87.5vh;
  top: 4rem;
  background: var(--ivory);
`
