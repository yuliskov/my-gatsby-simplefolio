import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Disclaimer = () => {
  const { disclaimer } = useContext(PortfolioContext);
  const { title, cta, btn, url } = disclaimer;

  return (
    <section id="disclaimer" className="uneven-section">
      <Container>
        <Title title={title || 'Disclaimer'} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="uneven-section-wrapper">
            <p className="uneven-section-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
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
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Disclaimer;
