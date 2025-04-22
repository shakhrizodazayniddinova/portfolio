import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Title from '../../Title/Title';
import { AboutStyled } from './AboutStyled';
import DownloadCv from '../../DownloadCv/DownloadCv';
import { useTranslation } from 'react-i18next';

const birthDate = new Date(2007, 3, 1);

export default function About({toggleVisible}) {
  // tranlation
  const { t } = useTranslation();
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
    {label: t('birthday'), item: '1 April 2007'},
    {label: t('age'), item: age},
    {label: t('city'), item: 'Tashkent, Uzbekistan'},
    {label: t('website'), item: 'shakhrizoda.vercel.app'},
    {label: t('degree'), item: 'Junior'},
    {label: 'Email:', item: 'shahrizodazayniddinova7@gmail.com'},
  ];

  return (
    <AboutStyled>
      <Title title={t('heading.about')} description={t('titles.about')}/>
      <span className='asideList'><i class="bi bi-list" onClick={toggleVisible}></i></span>

      <Box className='aboutData'>
        <Typography variant='h5' className='jobName'>{t('job')}</Typography>
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
        <Typography variant='caption'>{t('titles.aboutLittle')}</Typography>
      </Box>

      <DownloadCv/>
    </AboutStyled>
  )
}
