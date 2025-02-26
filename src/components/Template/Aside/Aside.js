import React, { useCallback } from 'react';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AsideStyled } from './AsideStyled';
import { Slide } from 'react-awesome-reveal';

const navData = [
    {icon: <i className="bi bi-person"></i>, label: 'About', secName: 'about'},
    {icon: <i className="bi bi-graph-up"></i>, label: 'Skills', secName: 'skills'},
    {icon: <i className="bi bi-file-earmark-text"></i>, label: 'Resume', secName: 'resume'},
    {icon: <i className="bi bi-images"></i>, label: 'Portfolio', secName: 'works'},
    {icon: <i className="bi bi-envelope"></i>, label: 'Contact', secName: 'contact'},
];

export default function Aside({scrollToSection, isVisible}) {
  const handleScrollToSection = useCallback((secName) => {
    scrollToSection(secName);
  }, [scrollToSection])

  return (
    <AsideStyled isVisible={isVisible}>
        <Slide direction='left'>
            <Box className='asideBox'>
                <Box className='nameImgBox'>
                    <AccountCircleIcon className='imgMe'/>
                    <Typography variant='body1' className='nameMe'>Shakhrizoda Zayniddinova</Typography>
                </Box>
                <Box className='socialBtnBox'>
                    {['https://t.me/zayniddinovvas', 'https://www.instagram.com/zayniddinovvas', 'https://www.linkedin.com/in/shakhrizodazayniddinova', 'https://github.com/shakhrizodazayniddinova'].map((url, index) => {
                      const icons = [<TelegramIcon />, <InstagramIcon />, <LinkedInIcon />, <GitHubIcon />];
                      return (
                        <IconButton key={index} className='socialBtn'>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {icons[index]}
                            </a>
                        </IconButton>
                      );
                    })}
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
  )
}
