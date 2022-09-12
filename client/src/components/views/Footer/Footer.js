import React from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import { 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin 
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Public</SocialLogo>
              <WebsiteRights>Public ⓒ {new Date().getFullYear()} All rights  reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
    // <div
    //   style={{
    //     color: '#1275d1',
    //     borderTop: '1px solid #333333',
    //     padding: '5px 0',
    //   }}
    // >
    //   <p>public data api bolierPlate</p>
    // </div>
  );
}

export default Footer;
