import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from './Menu'

const mail =
  'mailto:hello@robbowen.digital?subject=🤘 Hi Iver, Id like to hire you'

const Header = () => {
  const [isOpen, setisOpen] = useState(false)

  const menuHandler = e => {
    e.preventDefault()
    setisOpen(!isOpen)
  }

  return (
    <>
      <HeaderContainer>
        {isOpen ? <Menu /> : ''}
        <LogoWrapper>
          <div href="/">Logo</div>
          <p>|</p>
          <LinkContainer>
            <MenuLink href="/" onClick={menuHandler}>
              {isOpen ? 'close' : 'menu'}
            </MenuLink>
          </LinkContainer>
        </LogoWrapper>
        <LinkContainer>
          <MenuLink href={mail}>hire me</MenuLink>
        </LinkContainer>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  height: 5rem;
  align-items: center;
  text-transform: uppercase;
  top: 0;
  width: 90vw;
  position: fixed;
  padding: 1rem;
  z-index: 10000;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    padding-right: 0.5rem;
  }

  p {
    font-size: 2.5rem;
    line-height: 1rem;
  }
`
const MenuLink = styled.a`
  text-decoration: none;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 0.5rem;
  color: black;

  :hover {
    letter-spacing: 0.2rem;
  }

  :active {
    color: black;
  }

  :visited {
    color: black;
  }
`
const LinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
