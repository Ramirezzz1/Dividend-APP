import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover= () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Track your Portfolio for Free!</HeroH1>
                <HeroP>(add extra)</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        SignUp{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
