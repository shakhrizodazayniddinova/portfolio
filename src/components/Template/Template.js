import { CssBaseline } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
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

  const toggleVisible = useCallback(
    () => setIsVisible(prev => !prev),
    []
  );

  const sectionsRef = useRef({
    about: null,
    skills: null,
    resume: null,
    works: null,
    contact: null,
  });

  const scrollToSection = useCallback((sectionId) => {
    const section = sectionsRef.current[sectionId];

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  }, []);

  return (
    <TemplateStyled>
      <CssBaseline />

      <aside>
        <Aside
          scrollToSection={scrollToSection}
          isVisible={isVisible}
        />
      </aside>

      <main>
        <section ref={el => (sectionsRef.current.about = el)}>
          <Slide direction="up" triggerOnce>
            <About toggleVisible={toggleVisible} />
          </Slide>
        </section>

        <section ref={el => (sectionsRef.current.skills = el)}>
          <Fade>
            <Skills />
          </Fade>
        </section>

        <section ref={el => (sectionsRef.current.resume = el)}>
          <Fade>
            <Resume />
          </Fade>
        </section>

        <section ref={el => (sectionsRef.current.works = el)}>
          <Fade>
            <Works />
          </Fade>
        </section>

        <section ref={el => (sectionsRef.current.contact = el)}>
          <Fade>
            <Contact />
          </Fade>
        </section>
      </main>
    </TemplateStyled>
  );
}