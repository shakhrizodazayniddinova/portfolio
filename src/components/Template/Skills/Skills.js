import React, { useMemo } from 'react';
import Title from '../../Title/Title';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { SkillsStyled } from './SkillsStyled';
import { Slide } from 'react-awesome-reveal';
import { SkillsDate } from './SkillsData';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const {t} = useTranslation();
  const memoizedSkillsData = useMemo(() => SkillsDate, []);

  return (
    <SkillsStyled>
        <Title title={t('heading.skills')} description={t('titles.skills')}/>

        <Grid container spacing={'30px'} width={'100%'}>
            {memoizedSkillsData.map((skill) => (
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