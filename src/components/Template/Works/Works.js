import React, { useState } from 'react';
import Title from '../Title/Title';
import { Box, Grid, Typography } from '@mui/material';
import { WorksStyled } from './WorksStyled';
import 'animate.css';

import { designCardData, dynamicCardData } from './WorksDatas';

// const designCardData = [
//     {img: treloo, workName: 'Treloo', aboutWork: 'HTML | SCSS | Responsive', link: 'https://trelooo.netlify.app/', sourceCodeClass: 'sourceCodeNone'},
//     {img: hilltop, workName: 'Hill Top', aboutWork: 'HTML | SCSS | Not responsive', link: 'https://hilltop-shakhrizoda.netlify.app', sourceCodeClass: 'sourceCodeNone'},
//     {img: foodhut, workName: 'Food Hut', aboutWork: 'HTML | SCSS | JavaScript | Responsive', link: 'https://food-hut-by-shakhrizoda.netlify.app', sourceCodeClass: 'sourceCodeNone'},
//     {img: shopbootstrap, workName: 'Start Bootstrap', aboutWork: 'React | React Bootstrap | Not Responsive', link: 'https://homepage-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/shopHomePage', sourcecode: 'Source Code'},
//     {img: welcomebootstrap, workName: 'Blog Home', aboutWork: 'React | React Bootstrap | Not Responsive', link: 'https://welcome-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/welcomeMyApp', sourcecode: 'Source Code'},
//     {img: olegmarkov, workName: 'Oleg Markov', aboutWork: 'React | CSS | Not Responsive', link: 'https://olegmarkov-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/oleg', sourcecode: 'Source Code'},
//     {img: kaylagriffith, workName: 'Kayla Griffith', aboutWork: 'React | CSS | Not Responsive', link: 'https://kaylagriffith-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/griffith', sourcecode: 'Source Code'},
//     {img: geeks, workName: 'Geeks', aboutWork: 'React | Styled components | Not Responsive', link: 'https://geeks-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/geeks', sourcecode: 'Source Code'},
//     {img: albumlayout, workName: 'Album layout', aboutWork: 'React | MUI | Responsive', link: 'https://album-layout-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/album-layout', sourcecode: 'Source Code'},
//     {img: zone, workName: 'Zone Landing', aboutWork: 'React | MUI | Styled components | Not Responsive', link: 'https://zone-landing-clone.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/zone-landing-clone', sourcecode: 'Source Code'},
// ];

// const dynamicCardData = [
//     {img: calculator, workName: 'Calculator', aboutWork: 'React | SCSS | Not Responsive', link: 'https://calculator-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/calculator', sourcecode: 'Source Code'},
//     {img: todo, workName: 'ToDo App', aboutWork: 'React | Styled components | Redux Toolkit | React Animation Reveal | Responsive', link: 'https://todoapp-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/todoapp', sourcecode: 'Source Code'},
//     {img: skymovie, workName: 'Sky and Movie', aboutWork: 'React | Styled components | API | Router | Responsive', link: 'https://skyandscreen-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/weather', sourcecode: 'Source Code'},
//     {img: booknest, workName: 'Book Nest', aboutWork: 'React | Styled components | Context API | Router | Redux | Responsive', link: 'https://booknest-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/BookNest', sourcecode: 'Source Code'},
//     {img: express, workName: 'Express24', aboutWork: 'React | Styled components | Redux | Router | Not Responsive', link: 'https://express-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/express24', sourcecode: 'Source Code'},
//     {img: resipe, workName: 'Food Resipes', aboutWork: 'React | MUI | Styled components | API | Responsive', link: 'https://foodresipe.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/foodresipe', sourcecode: 'Source Code'},
//     {img: formdemo, workName: 'Form Demo', aboutWork: 'React | MUI | React Hook Form | Responsive', link: 'https://formdemo-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/formdemo', sourcecode: 'Source Code'},
//     {img: youtube, workName: 'Youtube clone', aboutWork: 'React | SCSS | MUI | Json API | Redux | Router | Not Responsive', link: 'https://youtube-by-shakhrizoda.netlify.app//', githubLink: 'https://github.com/shakhrizodazayniddinova/youtube', sourcecode: 'Source Code'},
//     {img: charts, workName: 'Charts', aboutWork: 'React | React ChartJS | Responsive', link: 'https://charts-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/charts', sourcecode: 'Source Code'},
//     {img: organicfood, workName: 'Organic Food', aboutWork: 'Webpack | Jsx | SCSS | Not Responsive', link: 'https://organicfood-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/organicFood', sourcecode: 'Source Code'},
//     {img: calendar, workName: 'Calendar', aboutWork: 'Webpack | Jsx | SCSS | MomentJs | Classnames | React Animation Reveal | Context API | Not Responsive', link: 'https://calendar-by-shakhrizoda.netlify.app/', githubLink: 'https://github.com/shakhrizodazayniddinova/calendar', sourcecode: 'Source Code'},
// ];

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
                <Typography variant='button' onClick={() => setActiveSection("static")} className={`workCategory ${activeSection === 'static' ? 'active' : ''}`}>Static</Typography>
                <Typography variant='button' onClick={() => setActiveSection("dynamic")} className={`workCategory ${activeSection === 'dynamic' ? 'active' : ''}`}>Dynamic</Typography>
            </nav>

            <Grid container spacing={'10px'} rowGap={'30px'}>
                {renderContent()}
            </Grid>
        </Box>
    </WorksStyled>
  )
}
