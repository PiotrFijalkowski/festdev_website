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
            <PortfolioBoxImg src={require('../../images/web1.png')}></PortfolioBoxImg>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web2.png')}></PortfolioBoxImg>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web3.png')}></PortfolioBoxImg>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web4.png')}></PortfolioBoxImg>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web5.png')}></PortfolioBoxImg>
          </PortfolioBox>
          <PortfolioBox>
            <PortfolioBoxImg src={require('../../images/web6.png')}></PortfolioBoxImg>
          </PortfolioBox>

        </PortfolioBoxContainer>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio
