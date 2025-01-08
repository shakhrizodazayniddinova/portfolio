import { Divider, Typography } from '@mui/material';
import React, { memo } from 'react';
import { TitleStyled } from './TitleStyled';
import { Slide } from 'react-awesome-reveal';

function Title({title, description}) {
  return (
    <TitleStyled>
      <Slide direction='left' duration={500}>
        <Typography variant='h4' className='title'>{title}</Typography>
      </Slide>
      <Divider className='line'></Divider>
      <p className='description'>"{description}"</p>
    </TitleStyled>
  )
}

export default memo(Title);