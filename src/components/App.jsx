import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Disclaimer from './Disclaimer/Disclaimer';
import Motivation from './Motivation/Motivation';
import Footer from './Footer/Footer';
import Media from './Media/Media';

import { PortfolioProvider } from '../context/context';
import {
  heroData,
  aboutData,
  projectsData,
  footerData,
  disclaimerData,
  motivationData,
  mediaData,
} from '../mock/data';

function App() {
  return (
    <PortfolioProvider
      value={{
        hero: heroData,
        about: aboutData,
        motivation: motivationData,
        media: mediaData,
        projects: projectsData,
        disclaimer: disclaimerData,
        footer: footerData,
      }}
    >
      <Hero />
      <About />
      <Motivation />
      <Media />
      <Disclaimer />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
