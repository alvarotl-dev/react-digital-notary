import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    /*
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin"> Install </FooterLink>
                            <FooterLink to="/signin"> Lorem </FooterLink>
                            <FooterLink to="/signin"> Ipsum </FooterLink>
                            <FooterLink to="/signin"> Wallet </FooterLink>
                            <FooterLink to="/signin"> KEKW </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Not About Us </FooterLinkTitle>
                            <FooterLink to="/signin"> Install </FooterLink>
                            <FooterLink to="/signin"> Lorem </FooterLink>
                            <FooterLink to="/signin"> Ipsum </FooterLink>
                            <FooterLink to="/signin"> Wallet </FooterLink>
                            <FooterLink to="/signin"> KEKW </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Really, Not About Us </FooterLinkTitle>
                            <FooterLink to="/signin"> Install </FooterLink>
                            <FooterLink to="/signin"> Lorem </FooterLink>
                            <FooterLink to="/signin"> Ipsum </FooterLink>
                            <FooterLink to="/signin"> Wallet </FooterLink>
                            <FooterLink to="/signin"> KEKW </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Clearly Yeah, About Us </FooterLinkTitle>
                            <FooterLink to="/signin"> Install </FooterLink>
                            <FooterLink to="/signin"> Lorem </FooterLink>
                            <FooterLink to="/signin"> Ipsum </FooterLink>
                            <FooterLink to="/signin"> Wallet </FooterLink>
                            <FooterLink to="/signin"> KEKW </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
        */

    return (
        <FooterContainer>
            <FooterWrap>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            ethNotary
                        </SocialLogo>
                        <WebsiteRights> ethNotary © {new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/alvarotldev/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/alvarotl_" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
