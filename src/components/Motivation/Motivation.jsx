import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Motivation = () => {
  const { motivation } = useContext(PortfolioContext);
  const { title, cta, btn, url, btn2, url2 } = motivation;

  return (
    <section id="motivation" className="uneven-section">
      <Container>
        <Title title={title || 'Motivation'} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="uneven-section-wrapper">
            <p className="uneven-section-wrapper__text">{cta || 'My motivation!'}</p>
            {url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={url || 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn || "Let's Talk"}
              </a>
            )}
            {'  '}
            {url2 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={url2 || 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn2 || "Let's Talk"}
              </a>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Motivation;
