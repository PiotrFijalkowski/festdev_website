import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10; 

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`

export const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 35%);
font-size: 1.8rem;
cursor: pointer;
color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
padding: 0;
@media screen and (max-width: 768px){
  display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #229d95;
  font-weight: 700;
}
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border: solid 2px #229d95;
  border-radius: 5px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00757d;
    transform: scale(101%);
    border: solid 2px #00757d;
  }
`
export const NavImg = styled.img`
height: 25px;
width: 180px;
`
