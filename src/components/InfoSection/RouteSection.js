import React from 'react'
import { ButtonRouter } from '../ButtonElements'
import { Img, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap} from './InfoElements'

const RouteSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, page}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrap>
                                    <ButtonRouter
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    primary={primary ? 1 : 0}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    exact="true"
                                    to={page}
                                    >
                                        {buttonLabel}
                                    </ButtonRouter>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default RouteSection
