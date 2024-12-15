import React, { useState } from 'react';
import 'animate.css';
import { Badge, Box, Grid, Typography } from '@mui/material';
import Title from '../Title/Title';
import { WorksStyled } from './WorksStyled';
import { designCardData, dynamicCardData } from './WorksDatas';

export default function Works() {
    const [activeSection, setActiveSection] = useState("static");

    const renderContent = () => {
      switch (activeSection) {
        case "static":
          return <>
            {designCardData.map((items) => (
                <Grid item xs={12} sm={6} md={4} className={`animate__animated animate__rotateInUpLeft`}>
                    <Box className='workCard'>
                        <Box className='workCardImgBox'>
                            <a href={items.link}>
                                <img src={items.img} />
                            </a>
                            <Typography variant='caption' className='sourceCodeText'><a href={items.githubLink} className={`${items.sourceCodeClass ? items.sourceCodeClass : 'sourceCode'}`}>{items.sourcecode}</a></Typography>
                        </Box>

                        <Box className='workCardSec'>
                            <Typography variant='subtitle1' fontWeight={'bold'} className='workName'><a href={items.link}>{items.workName}</a></Typography>
                            <Typography variant='body2'>{items.aboutWork}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
          </>;

        case "dynamic":
          return <>
            {dynamicCardData.map((items) => (
                <Grid item xs={12} sm={6} md={4} className={`animate__animated animate__rotateInUpRight`}>
                    <Box className='workCard'>
                        <Box className='workCardImgBox'>
                            <a href={items.link}>
                                <img src={items.img} />
                            </a>
                            <Typography variant='caption'><a href={items.githubLink} className='sourceCode'>{items.sourcecode}</a></Typography>
                        </Box>

                        <Box className='workCardSec'>
                            <Typography variant='subtitle1' fontWeight={'bold'} className='workName'><a href={items.link}>{items.workName}</a></Typography>
                            <Typography variant='body2'>{items.aboutWork}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
          </>;

        default:
            return <div className="design"></div>;
        }
    };

  return (
    <WorksStyled>
        <Title title={'Portfolio'} description={'Interactive user interfaces created using modern technologies. Projects developed for responsive design and efficient user experience.'}/>
    
        <Box className='worksBox'>
            <nav className='nav'>
                <Typography variant='button' onClick={() => setActiveSection("static")} className={`workCategory ${activeSection === 'static' ? 'active' : ''}`}>static <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>{designCardData.length}</Badge></Typography>
                <Typography variant='button' onClick={() => setActiveSection("dynamic")} className={`workCategory ${activeSection === 'dynamic' ? 'active' : ''}`}>interactive <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>{dynamicCardData.length}</Badge></Typography>
            </nav>

            <Grid container spacing={'10px'} rowGap={'30px'}>
                {renderContent()}
            </Grid>
        </Box>
    </WorksStyled>
  )
}
