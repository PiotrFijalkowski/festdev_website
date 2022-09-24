import React from 'react'
import { PortfolioBox, PortfolioBoxContainer, PortfolioContainer, PortfolioH1, PortfolioTittleWrapper

} from './PortfolioElements'

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioTittleWrapper>
          <PortfolioH1>Nasze przykładowe realizacje</PortfolioH1>
        </PortfolioTittleWrapper>
        <PortfolioBoxContainer>
          <PortfolioBox className='medium'>Pme</PortfolioBox>
          <PortfolioBox className='large'>Pme</PortfolioBox>
          <PortfolioBox className='medium'>Pme</PortfolioBox>
          <PortfolioBox className='small'>Pme</PortfolioBox>
          <PortfolioBox className='tall'>Pme</PortfolioBox>
          <PortfolioBox className='wide'>Pme</PortfolioBox>

        </PortfolioBoxContainer>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio
