import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight, HeroImg, HeroImgWrap} from './HeroElements';
import logo_img from '../../images/logo.png'

const HeroSection = () => {

    const[hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    // Hero Background inside HeroBg
    // <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroImgWrap>
                <HeroImg src={logo_img} alt={"logo"}/></HeroImgWrap>
                <HeroH1>Digital Notary With Blockchain</HeroH1>
                <HeroP>
                    Save your documents, make them secure.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to="install" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact={true} offset={-79}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
