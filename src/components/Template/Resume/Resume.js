import React, { memo, useMemo } from 'react';
import Title from '../../Title/Title';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { ResumeStyled } from './ResumeStyled';
import { resumeDatas } from './ResumeDatas';
import { useTranslation } from 'react-i18next';

function Resume() {
  const {t} = useTranslation();
  const memoizedResumeDatas = useMemo(() => resumeDatas, []);

  return (
    <ResumeStyled>
        <Title title={t('heading.resume')} description={t('titles.resume')}/>
    
        <Box className='resumeBox'>
          <Grid container columnSpacing={'20px'}>
            <Grid item xs={12} sm={6} md={8} className='gridItemBox'>
              <Typography variant='h5' fontWeight={'bold'}>{t('resumeData.education')}</Typography>

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
              <Typography variant='h5' fontWeight={'bold'}>{t('resumeData.contact')}</Typography>

              <Box className='gridItemBoxItems gridItemBoxItems2'>
                <span className='circle'></span>
                <Typography variant='overline' fontWeight={'bold'} color='gray'>{t('resumeData.perInfor')}</Typography>

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
                <Typography variant='overline' fontWeight={'bold'} color='gray'>{t('resumeData.location')}</Typography>
                <Typography variant='body1'>Tashkent, Uzbekistan</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={6} md={8} className='gridItemBox'>
              <Typography variant='h5' fontWeight={'bold'}>{t('resumeData.skills')}</Typography>

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
                <Typography variant='overline' fontWeight={'bold'} color='gray'>{t('resumeData.language')}</Typography>
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
