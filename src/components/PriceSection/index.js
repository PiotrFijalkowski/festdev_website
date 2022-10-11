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
              <li>Strona gotowa w kilka dni</li>
              <li>Pełna możliwość edycji treści</li>
              <li>System CMS WordPress</li>
              <li>Strona oparta o szablon</li>
              <li>RWD - dostosowanie strony do urządzeń mobilnych</li>
              <li>Formularz kontaktowy</li>
              <li>Mapa Google</li>
              <li>Domena i Serwer</li>
              <li>Optymalizacja SEO</li>
              <li>Szkolenie z obsługi</li>
              <li>2 lata gwarancji</li>
              <li>Certyfikat SSL</li>
            </ul>
          </PricesBoxContent>
          <PricesBoxBottom>Cena <br /><b>od 1000PLN</b></PricesBoxBottom>
        </PricesBox>
        <PricesBox>
          <PricesBoxTitle>Pakiet Individual</PricesBoxTitle>
          <PricesBoxContent>
            <ul>
              <li>Indywidualny Projekt Graficzny</li>
              <li>Pełna możliwość edycji treści</li>
              <li>System CMS WordPress</li>
              <li>Szablon tworzony według Projektu</li>
              <li>RWD - dostosowanie strony do urządzeń mobilnych</li>
              <li>Formularz kontaktowy</li>
              <li>Mapa Google</li>
              <li>Domena i Serwer</li>
              <li>Optymalizacja SEO</li>
              <li>Szkolenie z obsługi</li>
              <li>2 lata gwarancji</li>
              <li>Certyfikat SSL</li>
            </ul>
          </PricesBoxContent>
          <PricesBoxBottom>Cena <br /><b>od 2000PLN</b></PricesBoxBottom>
        </PricesBox>
        <PricesBox>
          <PricesBoxTitle>Pakiet E-COMMERCE</PricesBoxTitle>
          <PricesBoxContent>
            <ul>
              <li>Indywidualny Projekt Graficzny</li>
              <li>Pełna możliwość edycji treści</li>
              <li>Bezpieczne płatności</li>
              <li>Szablon tworzony według Projektu</li>
              <li>RWD - dostosowanie strony do urządzeń mobilnych</li>
              <li>Formularz kontaktowy</li>
              <li>Mapa Google</li>
              <li>Domena i Serwer</li>
              <li>Optymalizacja SEO</li>
              <li>Szkolenie z obsługi</li>
              <li>2 lata gwarancji</li>
              <li>Certyfikat SSL</li>
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