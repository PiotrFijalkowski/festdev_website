import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { IconContext } from 'react-icons/lib'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink,
  NavImg 
} from './NavbarKontaktElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <NavImg src={require('../../images/logo.svg').default} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Oferta</NavLinks>
              
            </NavItem>
            <NavItem>
              <NavLinks to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Sklepy Internetowe</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Realizacje</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/" 
              smooth={true} duration={500} spy={true} exact='true' offset={-80}>Cennik</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/kontakt">Kontakt</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>

    </>
  )
}

export default Navbar