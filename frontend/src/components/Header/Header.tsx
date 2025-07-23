import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaVk, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { VK_LINK, INSTA_LINK, TG_LINK, WHATSAPP_LINK } from '../../constants';
import './Header.css'; // Импортируем стили

interface HeaderProps {
  text: string;
}

interface ButtonProps {
  icon: React.ElementType;
  href: string;
  text: string;
}

const SocialButton: React.FC<ButtonProps> = ({ icon: Icon, href, text }) => {
  return (
    <Button
      className="social-button"
      color='inherit'
      startIcon={<Icon/>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Button>
  );
};

const socialLinks = [
  { icon: FaVk, text: 'VK', href: VK_LINK },
  { icon: FaInstagram, text: 'Instagram', href: INSTA_LINK },
  { icon: FaTelegram, text: 'Telegram', href: TG_LINK },
  { icon: FaWhatsapp, text: 'WhatsApp', href: WHATSAPP_LINK },
];

export const Header: React.FC<HeaderProps> = ({text: text}) => {
  return (
    <Box className="header-container">
      <Typography className="title" variant="h5" component="h1">
        {text}
      </Typography>

      <Box className="contacts-container">
        <Typography className="contacts-text" variant="subtitle1">
          Мои контакты
        </Typography>

        <Box className="social-buttons-container">
          {socialLinks.map((link, index) => (
            <SocialButton
              key={index}
              icon={link.icon}
              text={link.text}
              href={link.href}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};