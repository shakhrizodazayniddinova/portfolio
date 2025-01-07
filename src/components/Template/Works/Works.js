import React, { useMemo, useState } from 'react';
import 'animate.css';
import { Badge, Box, Grid, Typography } from '@mui/material';
import Title from '../../Title/Title';
import { WorksStyled } from './WorksStyled';
import { designCardData, dynamicCardData } from './WorksDatas';
import WorkCard from './WorkCard';

export default function Works() {
    const [activeSection, setActiveSection] = useState("dynamic");

    const renderContent = useMemo(() => {
        switch (activeSection) {
          case "dynamic":
            return <>
              {dynamicCardData.map((items, index) => (
                <WorkCard items={items} key={index} />
              ))}
            </>;
    
          case "static":
            return <>
              {designCardData.map((items, index) => (
                <WorkCard items={items} key={index} />
              ))}
            </>;
    
          default:
            return <div className="design"></div>;
        }
    }, [activeSection]); 

  return (
    <WorksStyled>
        <Title title={'Portfolio'} description={'Interactive user interfaces created using modern technologies. Projects developed for responsive design and efficient user experience.'}/>
    
        <Box className='worksBox'>
            <nav className='nav'>
                <Typography variant='button' onClick={() => setActiveSection("dynamic")} className={`workCategory ${activeSection === 'dynamic' ? 'active' : ''}`}>
                    interactive <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>
                    {dynamicCardData.length}</Badge>
                </Typography>
                <Typography variant='button' onClick={() => setActiveSection("static")} className={`workCategory ${activeSection === 'static' ? 'active' : ''}`}>
                    static <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>
                    {designCardData.length}</Badge>
                </Typography>
            </nav>

            <Grid container spacing={'10px'} rowGap={'30px'}>
                { renderContent }
            </Grid>
        </Box>
    </WorksStyled>
  )
}
