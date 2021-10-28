import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    WebsiteRights
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                   <FooterLinkItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                       <FooterLink to="/signin">How it works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Our Partners</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Service</FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/signin">1-800-Div-Coin</FooterLink>
                       <FooterLink to="/signin">Div-Coin@Div.com</FooterLink>
                       <FooterLink to="/signin">Twitter</FooterLink>
                       <FooterLink to="/signin">Facebook</FooterLink>
                       <FooterLink to="/signin">Instagram</FooterLink>
                   </FooterLinkItems>  
               </FooterLinksWrapper>
               <FooterLinksWrapper>
                   <FooterLinkItems>
                       <FooterLinkTitle>Testimonials</FooterLinkTitle>
                       <FooterLink to="/signin">How it works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Service</FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitle>Careers</FooterLinkTitle>
                       <FooterLink to="/signin">How it works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Service</FooterLink>
                   </FooterLinkItems>  
               </FooterLinksWrapper>  
            </FooterLinksContainer>
            <WebsiteRights>Div-Coin © {new Date().getFullYear()} All rights Reserved</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer;
