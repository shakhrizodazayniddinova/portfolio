import React, { useCallback } from 'react';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AsideStyled } from './AsideStyled';
import { Slide } from 'react-awesome-reveal';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Aside({scrollToSection, isVisible}) {
  const handleScrollToSection = useCallback((secName) => {
    scrollToSection(secName);
  }, [scrollToSection]);

// language state
  const {t} = useTranslation();

  const navData = [
    {icon: <i className="bi bi-person"></i>, label: t("heading.about"), secName: 'about'},
    {icon: <i className="bi bi-graph-up"></i>, label: t("heading.skills"), secName: 'skills'},
    {icon: <i className="bi bi-file-earmark-text"></i>, label: t("heading.resume"), secName: 'resume'},
    {icon: <i className="bi bi-images"></i>, label: t("heading.portfolio"), secName: 'works'},
    {icon: <i className="bi bi-envelope"></i>, label: t("heading.contact"), secName: 'contact'},
];

  return (
    <AsideStyled isVisible={isVisible}>
        <Slide direction='left'>
            <Box className='asideBox'>
                    <Box className='nameImgBox'>
                    <AccountCircleIcon className='imgMe'/>
                    <Typography variant='body1' className='nameMe'>Shakhrizoda Zayniddinova</Typography>
                </Box>
                <Box className='socialBtnBox'>
                    {['https://t.me/shakhrizode', 'https://www.instagram.com/zayniddinovvas', 'https://www.linkedin.com/in/shakhrizodazayniddinova', 'https://github.com/shakhrizodazayniddinova'].map((url, index) => {
                      const icons = [<TelegramIcon />, <InstagramIcon />, <LinkedInIcon />, <GitHubIcon />];
                      return (
                        <IconButton key={index} className='socialBtn'>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {icons[index]}
                            </a>
                        </IconButton>
                      );
                    })}
                    
                    <LanguageSwitcher />
                </Box>
                <Box className='asideNavBox'>
                    <List className='navList'>
                        {navData.map((item, index) => (
                            <ListItem key={index} className={`asideNav`} onClick={() => handleScrollToSection(item.secName)}>
                                {item.icon}
                                <Typography variant='body2' className='navText'>{item.label}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Slide>
    </AsideStyled>
  );
};