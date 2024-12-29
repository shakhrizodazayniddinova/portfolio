import React from 'react';
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
    {icon: <i class="bi bi-graph-up"></i>, label: 'Skills', secName: 'skills'},
    {icon: <i className="bi bi-file-earmark-text"></i>, label: 'Resume', secName: 'resume'},
    {icon: <i className="bi bi-images"></i>, label: 'Portfolio', secName: 'works'},
    {icon: <i className="bi bi-envelope"></i>, label: 'Contact', secName: 'contact'},
];

export default function Aside({scrollToSection, isVisible}) {

  return (
    <AsideStyled isVisible={isVisible}>
        <Slide direction='left'>
            <Box className='asideBox'>
                <Box className='nameImgBox'>
                    <AccountCircleIcon className='imgMe'/>
                    <Typography variant='body1' className='nameMe'>Shakhrizoda Zayniddinova</Typography>
                </Box>
                <Box className='socialBtnBox'>
                    <IconButton className='socialBtn'>
                        <a href="https://t.me/shahrizoda_zayniddinova">
                            <TelegramIcon/>
                        </a>
                    </IconButton>

                    <IconButton className='socialBtn'>
                        <a href="https://www.instagram.com/shakhrezadeff">
                            <InstagramIcon/>
                        </a>
                    </IconButton>

                    <IconButton className='socialBtn'>
                        <a href="https://www.linkedin.com/in/shakhrizodazayniddinova">
                            <LinkedInIcon/>
                        </a>
                    </IconButton>

                    <IconButton className='socialBtn'>
                        <a href="https://github.com/shakhrizodazayniddinova">
                            <GitHubIcon/>
                        </a>
                    </IconButton>
                </Box>
                <Box className='asideNavBox'>
                    <List className='navList'>
                        {navData.map((item) => (
                            <ListItem className={`asideNav`} onClick={() => scrollToSection(item.secName)}>
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
