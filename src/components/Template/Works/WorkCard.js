import React, { memo } from 'react';
import 'animate.css';
import { Box, Grid, Typography } from '@mui/material';

function WorkCard({items}) {
  return (
    <Grid item xs={12} sm={6} md={4} className={`animate__animated animate__rotateInUpRight`}>
        <Box className='workCard'>
            <Box className='workCardImgBox'>
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                    <img src={items.img} loading="lazy" alt='project img' />
                </a>
                <Typography variant='caption'>
                    <a href={items.githubLink} target="_blank" rel="noopener noreferrer" className={`${items.sourceCodeClass ? items.sourceCodeClass : 'sourceCode'}`}>
                        {items.sourcecode}
                    </a>
                </Typography>
            </Box>

            <Box className='workCardSec'>
                <Typography variant='subtitle1' fontWeight={'bold'} className='workName'>
                    <a href={items.link} target="_blank" rel="noopener noreferrer">{items.workName}</a>
                </Typography>
                <Typography variant='body2'>{items.aboutWork}</Typography>
            </Box>
        </Box>
    </Grid>
  );
}

export default memo(WorkCard);
