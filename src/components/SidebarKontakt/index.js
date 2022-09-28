import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarKontaktElements'

function SidebarKontakt({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
            Oferta
          </SidebarLink>
          <SidebarLink to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
            Sklepy Internetowe
          </SidebarLink>
          <SidebarLink to="/"smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
          Realizacje
          </SidebarLink>
          <SidebarLink to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
          Cennik
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/kontakt' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
          Kontakt
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SidebarKontakt