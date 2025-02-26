import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Title from '../../Title/Title';
import { AboutStyled } from './AboutStyled';
import DownloadCv from '../../DownloadCv/DownloadCv';

const birthDate = new Date(2007, 3, 1);

export default function About({toggleVisible}) {
  const [age, setAge] = useState(0);
  
  useEffect(() => {
    const currentDate = new Date();
    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);
  
  const gridData = [
    {label: 'Birthday:', item: '1 April 2007'},
    {label: 'Age:', item: age},
    {label: 'City:', item: 'Tashkent, Uzbekistan'},
    {label: 'Website:', item: 'shakhrizoda.vercel.app'},
    {label: 'Degree:', item: 'Junior'},
    {label: 'Email:', item: 'shahrizodazayniddinova7@gmail.com'},
  ];

  return (
    <AboutStyled>
      <Title title={'About'} description={"I am a passionate front-end developer with a strong interest in React, JavaScript and web development. I have experience working with API. As a frontend developer, I participated in the development of the admin panel. I created a dynamic UI using NextJs, TypeScript and Tailwind added data management functions. I want to continue learning and expanding my knowledge of front-end technologies while contributing to impactful projects. "}/>
      <span className='asideList'><i class="bi bi-list" onClick={toggleVisible}></i></span>

      <Box className='aboutData'>
        <Typography variant='h5' className='jobName'>Frontend Developer</Typography>
      </Box>

      <Box className='gridBox'>
        <Grid container className='gridContainer'>
          {gridData.map((items, index) => (
            <Grid item xs={12} sm={6} md={4} className='gridItem' key={index}>
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

      <DownloadCv/>
    </AboutStyled>
  )
}
