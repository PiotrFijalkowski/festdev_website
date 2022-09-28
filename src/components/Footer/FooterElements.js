import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import {BsInstagram, BsFacebook, BsTelephoneFill} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'

export const FooterContainer = styled.div`
background-color: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 50px 0px 0px 0px;
flex-direction: column;

`
export const FooterWrapper = styled.div`
max-width: 1200px;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const FooterRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
flex-direction: row;
&.under {
  background-color: #229d95;
  color: #fff;
  padding: 5px;
  width: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
}

`
export const FooterColumn = styled.div`
color: #fff;
display: flex;
flex-direction: column;
text-decoration: none;
text-align: right;
&.left {
  text-align: left;
}
a {
  color: #fff;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
}
`
export const FooterUnderSection = styled.div`
max-width: 1200px;
padding: 8px 24px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const FooterLogo = styled.img`
width: 250px;
`

export const FooterLink = styled(LinkS)`
padding: 5px 0px;
  transition: all 0.5s ease-in-out;
&:hover {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
`
export const FooterLinkR = styled(LinkR)`
padding: 5px 0px;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  color: #fff;
&:hover {
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}
`

export const InstaIcon = styled(BsInstagram)`
  margin-left: 8px;
  font-size: 20px;
  `
export const FbIcon = styled(BsFacebook)`
  margin-left: 8px;
  font-size: 20px;
  `
export const GmailIcon = styled(GoMail)`
  margin-left: 8px;
  font-size: 16px;
  `

export const TeleIcon = styled(BsTelephoneFill)`
  margin-left: 8px;
  font-size: 14px;
  `

  export const IconsWrapper = styled.div`
  display: flex;
  color: #fff;
  a {
    text-decoration: none;
  color: #fff;
  }
  `