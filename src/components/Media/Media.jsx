import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Video from '../Video/Video';

const Media = () => {
  const { media } = useContext(PortfolioContext);
  const { title, videoId } = media;

  return (
    <section id="media" className="even-section">
      <Container>
        <Title title={title || 'Media'} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="even-section-wrapper">
            <Video videoId={videoId} videoTitle={title} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Media;
