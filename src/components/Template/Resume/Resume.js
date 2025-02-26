import React, { memo, useMemo } from 'react';
import Title from '../../Title/Title';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { ResumeStyled } from './ResumeStyled';
import { resumeDatas } from './ResumeDatas';

function Resume() {
  const memoizedResumeDatas = useMemo(() => resumeDatas, []);

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
                <Typography variant='body1'>PDP Academy - Online</Typography>
                <ul className='educationSkills'>
                  <li>HTML, CSS, SASS, Bootstrap, Material UI</li>
                  <li>JavaScript (ES6+), ReactJS, NextJs</li>
                  <li>State Management - Redux Toolkit, Context API</li>
                  <li>API Integration: RESTful APIs, JSON APIs, Axios</li>
                  <li>Vitest</li>
                  <li>Utility Libraries</li>
                  <li>Responsive Design</li>
                  <li>React Awesome Reveal, Animation CSS</li>
                  <li>Git/GitHub, VS Code, npm</li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={8} className='gridItemBox gridItemBox2'>
              <Typography variant='h5' fontWeight={'bold'}>Contact</Typography>

              <Box className='gridItemBoxItems gridItemBoxItems2'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Personal Information</Typography>

                <Box>
                  <Typography variant='caption' fontWeight={'bold'}>Email</Typography>
                  <Typography variant='body1'>shahrizodazayniddinova7@gmail.com</Typography>
                </Box>

                <Box>
                  <Typography variant='caption' fontWeight={'bold'}>Phone</Typography>
                  <Typography variant='body1'>+998 99-067-90-40</Typography>
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

                <List sx={{p: 0}}>
                  {memoizedResumeDatas.map((item, index) => (
                    <ListItem key={index}>
                      <Typography variant='button' fontSize={'13px'}>{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box className='gridItemBoxItems'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>Language</Typography>
                <Typography variant='body1'>Uzbek <Typography variant='caption' fontWeight={'bold'}>(Native)</Typography> </Typography>
                <Typography variant='body1'>English <Typography variant='caption' fontWeight={'bold'}>(Intermediate)</Typography> </Typography>
                <Typography variant='body1'>Russian <Typography variant='caption' fontWeight={'bold'}>(Basic)</Typography> </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </ResumeStyled>
  )
}

export default memo(Resume);
