import React, { useState } from 'react'
import Video from '../../videos/video2.mp4'
import { Button2 } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Track your Portfolio for Free!</HeroH1>
                <HeroP>Sign Up today and Recieve two free stocks on us! Invite friends and recieve and additional stock per person. </HeroP>
                <HeroBtnWrapper>
                    <Button2 to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        SignUp{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
