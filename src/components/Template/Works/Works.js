import React, { useMemo, useState } from 'react';
import { Badge, Box, Grid, Typography } from '@mui/material';
import Title from '../../Title/Title';
import WorkCard from './WorkCard';
import { designCardData, dynamicCardData } from './WorksDatas';
import { WorksStyled } from './WorksStyled';
import { useTranslation } from 'react-i18next';

export default function Works() {
    const {t} = useTranslation();
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
        <Title title={t('heading.portfolio')} description={t('titles.portfolio')}/>
    
        <Box className='worksBox'>
            <nav className='nav'>
                <Typography variant='button' onClick={() => setActiveSection("dynamic")} className={`workCategory ${activeSection === 'dynamic' ? 'active' : ''}`}>
                    {t('interactive')} <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>
                    {dynamicCardData.length}</Badge>
                </Typography>
                <Typography variant='button' onClick={() => setActiveSection("static")} className={`workCategory ${activeSection === 'static' ? 'active' : ''}`}>
                    {t('static')} <Badge sx={{mb: 3, px: 0.5, fontSize: '12px', borderRadius: '50%', bgcolor: '#149ddd', color: 'white'}}>
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
