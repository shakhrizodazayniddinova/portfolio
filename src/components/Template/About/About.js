import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Title from '../Title/Title';
import { AboutStyled } from './AboutStyled';

const birthYear = 2007;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const gridData = [
  {label: 'Birthday:', item: '1 April 2007'},
  {label: 'Age:', item: age},
  {label: 'City:', item: 'Tashkent, Uzbekistan'},
  {label: 'Website:', item: 'https://shakhrizodazayniddinova.netlify.app'},
  {label: 'Degree:', item: 'Junior'},
  {label: 'Email:', item: 'shakhrizodazayniddinova7@gmail.com'},
];

export default function About({toggleVisible}) {
  return (
    <AboutStyled>
      <Title title={'About'} description={"I, Shakhrizoda, am a young developer improving my knowledge in the field of frontend technologies. I am interested in web design and creating interactive features. I am ready to constantly learn and apply new technologies."}/>
      <span className='asideList'><i class="bi bi-list" onClick={toggleVisible}></i></span>

      <Box className='aboutData'>
        <Typography variant='h5' className='jobName'>Frontend Developer</Typography>
      </Box>

      <Box className='gridBox'>
        <Grid container className='gridContainer'>
          {gridData.map((items) => (
            <Grid item xs={12} sm={6} md={4} className='gridItem'>
              <Box className='aboutGridItems'>
                <i className="bi bi-chevron-right arrowIcon"></i>
                <Typography variant='body1' className='boldText'>{items.label}</Typography>
                <Typography variant='body1' className='aboutItems'>{items.item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className='aboutText2'>
        <Typography variant='caption'>I have been learning programming 3 years. I have more than 3 years of computer experience. Likes to learn new things, try and communicate. Coffee, photography, music and art are my happy places.</Typography>
      </Box>
    </AboutStyled>
  )
}
