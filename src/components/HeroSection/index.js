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
        <HeroH1>Rozwiń swoją firmę z naszą pomocą!</HeroH1>
        <HeroP>Tworzymy strony internetowe z pasją</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>
            Zobacz Ofertę {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection