import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  min-height: 860px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const PortfolioTittleWrapper = styled.div``
export const PortfolioH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`
export const PortfolioBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

`
export const PortfolioBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: red;
aspect-ratio: 1;

`