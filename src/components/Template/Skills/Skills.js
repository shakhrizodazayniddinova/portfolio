import React from 'react';
import Title from '../Title/Title';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { SkillsStyled } from './SkillsStyled';
import { Slide } from 'react-awesome-reveal';

const skillsDate = [
    {name: 'HTML', value: 100},
    {name: 'CSS', value: 90},
    {name: 'SCSS', value: 80},
    {name: 'Bootstrap', value: 85},
    {name: 'Tailwind', value: 75},
    {name: 'Material UI', value: 70},
    {name: 'JavaScript', value: 80},
    {name: 'React', value: 70},
]

export default function Skills() {
  return (
    <SkillsStyled>
        <Title title={'Skills'} description={"I have a strong foundation in frontend development, with expertise in building websites using HTML, CSS, JavaScript, and React. I'm committed to delivering high-quality, responsive designs and I'm constantly evolving to incorporate the latest web development practices."}/>

        <Grid container spacing={'30px'} width={'100%'}>
            {skillsDate.map((skill) => (
                <Grid item xs={12} sm={6} md={6} key={skill.name}>
                    <Box className='nameValue'>
                        <Typography sx={{ fontWeight: 600 }} variant='caption'> {skill.name} </Typography>
                        <Typography variant='caption'>{skill.value}%</Typography>
                    </Box>
                    <Box>
                        <Slide direction='left'>
                            <LinearProgress variant="determinate" value={skill.value} className='linearProgress' sx={{ "& .MuiLinearProgress-bar": {backgroundColor: "#007bff"}}}/>
                        </Slide>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </SkillsStyled>
  )
};