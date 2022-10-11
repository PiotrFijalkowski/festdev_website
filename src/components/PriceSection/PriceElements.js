import styled from 'styled-components'
export const PricesWrapper = styled.div`
  background-color: #010606;
  width: 100%;
`
export const PricesContainer = styled.div`
  min-height: 860px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
`

export const PricesBoxWrapper = styled.div`
width: 100%;
margin: 50px auto;
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PricesBox = styled.div`
margin: 25px 0px;
`
export const PricesBoxTitle = styled.div`
padding: 35px;
background-color: #229d95;
color: #fff;
font-weight: 700;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
text-transform: uppercase;

`
export const PricesBoxContent = styled.div`
    border: 1px solid #454545;
    border-width: 0px 1px 0 1px;
ul {
  list-style: none;
  padding-inline-start: 0px;

  li {
    font-size: 14px;
    border-bottom: 1px solid #454545;
    transition: all 0.3s ease-in-out;
    padding: 15px;
    &:hover {
      background-color: #0b3330;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }

  }
}
`
export const PricesBoxBottom = styled.div`
padding: 15px;
background-color: #229d95;
color: #fff;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`

