import React from 'react';
import { Box, Grid2 } from '@mui/material';
import Title from '../../Title/Title';
import WorkCard from './WorkCard';
import { designCardData } from './WorksDatas';
import { WorksStyled } from './WorksStyled';
import { useTranslation } from 'react-i18next';

export default function Works() {
  const {t} = useTranslation();

  return (
    <WorksStyled>
        <Title title={t('heading.portfolio')} description={t('titles.portfolio')}/>
    
        <Box className='worksBox'>
            <Grid2 container spacing={'10px'} rowGap={'30px'}>
                { designCardData.map((items, index) => (
                  <WorkCard items={items} key={index} />
                )) }
            </Grid2>
        </Box>
    </WorksStyled>
  )
}
