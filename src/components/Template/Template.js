import { CssBaseline } from '@mui/material';
import React, { useRef, useState } from 'react';
import Aside from './Aside/Aside';
import About from './About/About';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
import Works from './Works/Works';
import Contact from './Contact/Contact';
import { TemplateStyled } from './TemplateStyled';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Template() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => setIsVisible(!isVisible);

  const [activeSection, setActiveSection] = useState('about');
  
  const sectionsRef = {
    about: useRef(null),
    skills: useRef(null),
    resume: useRef(null),
    works: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    if (sectionsRef[sectionId]?.current) {
      sectionsRef[sectionId].current.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  };

  return (
    <TemplateStyled>
        <CssBaseline/>

        <aside>
          <Aside scrollToSection={scrollToSection} activeSection={activeSection} isVisible={isVisible}/>
        </aside>

        <main>
            <section ref={sectionsRef.about}>
              <Slide direction='up' triggerOnce>
                <About toggleVisible={toggleVisible}/>
              </Slide>
            </section>

            <section ref={sectionsRef.skills}>
              <Fade>
                <Skills />
              </Fade>
            </section>

            <section ref={sectionsRef.resume}>
              <Fade>
                <Resume />
              </Fade>
            </section>

            <section ref={sectionsRef.works}>
              <Fade>
                <Works />
              </Fade>
            </section>

            <section ref={sectionsRef.contact}>
              <Fade>
                <Contact />
              </Fade>
            </section>
        </main>
    </TemplateStyled>
  )
}
