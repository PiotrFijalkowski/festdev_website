import React from 'react'
import { FooterColumn, FooterContainer, FooterLogo, FooterRow, FooterUnderSection, FooterWrapper, FooterLink, FooterLinkR, InstaIcon, FbIcon, GmailIcon, IconsWrapper, TeleIcon } from './FooterElements'

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterWrapper>
          <FooterRow>
            <FooterColumn className='left'>
              <FooterLogo width="250px" height='45px' src={require('../../images/logo.svg').default} />
              <p>Tworzymy strony internetowe z pasją. <br />Rozwiń swój biznes już dziś.</p>
            </FooterColumn>
            <FooterColumn>
            <h3>Kontakt</h3><br />
            <p><TeleIcon /> <a href="tel:+48881185247">+48 881-185-247</a></p>
            <p><GmailIcon /> <a href="mailto:kontakt@festdev.pl">Kontakt@FestDev.pl</a></p>
            </FooterColumn>
            <FooterColumn>
              <h3>Przydatne Linki</h3><br />
              <FooterLink to='oferta' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Oferta</FooterLink>
              <FooterLink to='sklepy-internetowe' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sklepy Internetowe</FooterLink>
              <FooterLink to='realizacje' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Realizacje</FooterLink>
              <FooterLink to='cennik' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Cennik</FooterLink>
              <FooterLinkR to='/kontakt#' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Kontakt</FooterLinkR>
            </FooterColumn>
          </FooterRow>
        </FooterWrapper>
          <FooterRow className='under'>
            <FooterUnderSection>
              <p>Copyright Ⓒ 2022 FestDev. All Rights Reserved.</p>
              <IconsWrapper>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/festdevpl">
              <InstaIcon/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://facebook.com/festdevpl">
               <FbIcon />
               </a>
              </IconsWrapper>
            </FooterUnderSection>
          </FooterRow>

        </FooterContainer>
    </footer>
  )
}

export default Footer
