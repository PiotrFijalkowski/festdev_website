import React from 'react'
import { PortfolioBox, PortfolioBoxContainer, PortfolioBoxImg, PortfolioContainer, PortfolioH1, PortfolioTittleWrapper

} from './PortfolioElements'

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id='realizacje'>
        <PortfolioTittleWrapper>
          <PortfolioH1>Nasze przykładowe realizacje</PortfolioH1><br />
        </PortfolioTittleWrapper>
        <PortfolioBoxContainer>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web1.webp')}  width='100%' height='100%'/>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web2.webp')} width='100%' height='100%'/>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web3.webp')} width='100%' height='100%'/>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web4.webp')} width='100%' height='100%'/>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web5.webp')} width='100%' height='100%'/>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web6.webp')} width='100%' height='100%'/>
          </PortfolioBox>

        </PortfolioBoxContainer>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio
