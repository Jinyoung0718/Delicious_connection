import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
        <SocialIconLink href="https://www.instagram.com" target="_blank">
          <AiOutlineInstagram size={30} />
        </SocialIconLink>
        <SocialIconLink href="https://www.youtube.com" target="_blank">
          <AiOutlineYoutube size={30} />
        </SocialIconLink>
        <SocialIconLink href="https://www.facebook.com" target="_blank">
          <AiOutlineFacebook size={30} />
        </SocialIconLink>
        </SocialIcons>
        <TextContainer>
          <h1>Everyone can cook easily</h1>
          <hr style={{ width: '300px' }} />
          <p>“If it tastes good then it’s 0 calories”</p>
        </TextContainer>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIconLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
  font-weight: 200;
  font-size: 100%;
`;

export default Footer;
