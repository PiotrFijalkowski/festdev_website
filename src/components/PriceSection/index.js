import React from 'react'
import { PricesBox, PricesBoxBottom, PricesBoxContent, PricesBoxTitle, PricesBoxWrapper, PricesContainer, PricesWrapper } from './PriceElements'

const Prices = () => {
  return (
    <PricesWrapper id='cennik'>
    <PricesContainer>
      <h1>Cennik Usług</h1>
      <PricesBoxWrapper>
        <PricesBox>
          <PricesBoxTitle>Pakiet Ekspress</PricesBoxTitle>
          <PricesBoxContent>
            <ul>
              <li>Twój nowy serwis internetowy gotowy w kilka dni</li>
              <li>Pełna możliwość samodzielnej edycji treści</li>
              <li>Niezawodny system CMS WordPress</li>
              <li>Strona oparta o atrakcyjny szablon</li>
              <li>RWD - dostosowanie strony do wszelkich urządzeń mobilnych</li>
              <li>Interaktywny formularz kontaktowy</li>
              <li>Lokalizacja na Mapie Google</li>
              <li>Zakup domeny i serwera</li>
              <li>Profesjonalna optymalizacja SEO</li>
              <li>Szkolenie z obsługi strony</li>
              <li>2 lata gwarancji na usługi</li>
              <li>Bezpieczny certyfikat SSL</li>
            </ul>
          </PricesBoxContent>
          <PricesBoxBottom>Cena <br /><b>od 1000PLN</b></PricesBoxBottom>
        </PricesBox>
        <PricesBox>
          <PricesBoxTitle>Pakiet Individual</PricesBoxTitle>
          <PricesBoxContent>
            <ul>
              <li>Indywidualny Projekt Graficzny dostosowany do Twoich potrzeb</li>
              <li>Pełna możliwość samodzielnej edycji treści</li>
              <li>Niezawodny system CMS WordPress</li>
              <li>Szablon tworzony według unikalnego Projektu</li>
              <li>RWD - dostosowanie strony do wszelkich urządzeń mobilnych</li>
              <li>Interaktywny formularz kontaktowy</li>
              <li>Lokalizacja na Mapie Google</li>
              <li>Zakup domeny i serwera</li>
              <li>Profesjonalna optymalizacja SEO</li>
              <li>Szkolenie z obsługi strony</li>
              <li>2 lata gwarancji na usługi</li>
              <li>Bezpieczny certyfikat SSL</li>
            </ul>
          </PricesBoxContent>
          <PricesBoxBottom>Cena <br /><b>od 2000PLN</b></PricesBoxBottom>
        </PricesBox>
        <PricesBox>
          <PricesBoxTitle>Pakiet E-COMMERCE</PricesBoxTitle>
          <PricesBoxContent>
            <ul>
              <li>Indywidualny Projekt Graficzny dostosowany do Twojego biznesu</li>
              <li>Pełna możliwość samodzielnej edycji treści</li>
              <li>Bezpieczne i szybkie płatności online</li>
              <li>Szablon tworzony według unikalnego Projektu</li>
              <li>RWD - dostosowanie strony do wszelkich urządzeń mobilnych</li>
              <li>Interaktywny formularz kontaktowy</li>
              <li>Lokalizacja na Mapie Google</li>
              <li>Zakup domeny i serwera</li>
              <li>Profesjonalna optymalizacja SEO</li>
              <li>Szkolenie z obsługi strony</li>
              <li>2 lata gwarancji na usługi</li>
              <li>Bezpieczny certyfikat SSL</li>
            </ul>
          </PricesBoxContent>
          <PricesBoxBottom>Cena <br /><b>od 2500PLN</b></PricesBoxBottom>
        </PricesBox>
      </PricesBoxWrapper>
    </PricesContainer>
    </PricesWrapper>

  )
}

export default Prices