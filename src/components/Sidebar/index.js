import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="oferta"
              smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
            Oferta
          </SidebarLink>
          <SidebarLink to="sklepy-internetowe"
              smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
            Sklepy Internetowe
          </SidebarLink>
          <SidebarLink to="realizacje"smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
          Realizacje
          </SidebarLink>
          <SidebarLink to="cennik" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
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

export default Sidebar