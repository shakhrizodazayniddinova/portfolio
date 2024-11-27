import React from 'react';
import Title from '../Title/Title';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { ResumeStyled } from './ResumeStyled';

export default function Resume() {
  return (
    <ResumeStyled>
        <Title title={"Resume"} description={"I am working towards becoming a Frontend Developer. I have experience working with HTML, CSS, SCSS, Tailwind, Bootstrap, Material UI, JavaScript, and React. I'm a quick learner and a problem solver. I want to enrich my experience through web projects."}/>
    
        <Box className='resumeBox'>
          <Grid container columnSpacing={'20px'}>
            <Grid item xs={12} sm={6} md={8} className='gridItemBox'>
              <Typography variant='h5' fontWeight={'bold'}>Education</Typography>

              <Box className='gridItemBoxItems'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Frontend Development</Typography>
                <Typography variant='caption' fontWeight={'bold'}>2023-2024</Typography>
                <Typography variant='body1'>PDP Academy - Personal Development Process</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={8} className='gridItemBox gridItemBox2'>
              <Typography variant='h5' fontWeight={'bold'}>Contact</Typography>

              <Box className='gridItemBoxItems gridItemBoxItems2'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Personal Information</Typography>

                <Box>
                  <Typography variant='caption' fontWeight={'bold'}>Email</Typography>
                  <Typography variant='body1'>shakhrizodazayniddinova7@gmail.com</Typography>
                </Box>

                <Box>
                  <Typography variant='caption' fontWeight={'bold'}>Phone</Typography>
                  <Typography variant='body1'>(+998) 99-067-90-40</Typography>
                </Box>
              </Box>

              <Box className='gridItemBoxItems'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Location</Typography>
                <Typography variant='body1'>Tashkent, Uzbekistan</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={6} md={8} className='gridItemBox'>
              <Typography variant='h5' fontWeight={'bold'}>Skills</Typography>

              <Box className='gridItemBoxItems'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Frontend Skills</Typography>

                <List>
                  <ListItem><Typography variant='button'>HTML</Typography></ListItem>
                  <ListItem><Typography variant='button'>CSS</Typography></ListItem>
                  <ListItem><Typography variant='button'>SCSS</Typography></ListItem>
                  <ListItem><Typography variant='button'>Tailwind</Typography></ListItem>
                  <ListItem><Typography variant='button'>Bootstrap</Typography></ListItem>
                  <ListItem><Typography variant='button'>Material UI</Typography></ListItem>
                  <ListItem><Typography variant='button'>JavaScript</Typography></ListItem>
                  <ListItem><Typography variant='button'>React</Typography></ListItem>
                </List>
              </Box>

              <Box className='gridItemBoxItems'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Language</Typography>
                <Typography variant='body1'>English - Intermediate</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </ResumeStyled>
  )
}
