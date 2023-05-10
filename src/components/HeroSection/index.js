import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'

const HeroSection = () => {

const [hover, setHover] = useState(false)

const onHover = () => {
  setHover(!hover);
}


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg  
        autoPlay={true} 
        loop={true}
        controls={false} 
        playsInline
        muted
        src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Rozwiń swój biznes dzięki naszej wiedzy!</HeroH1>
        <HeroP>Projektujemy strony internetowe z pasją, przekształcając twoje wizje w rzeczywistość.</HeroP>
        <HeroBtnWrapper>
          <Button to="oferta" smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>
             Poznaj naszą Ofertę {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection