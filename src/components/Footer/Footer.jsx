import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { copyrightInfo, githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled: isButtonsEnabled } = githubButtons;
  const { isEnabled: isCopyrightEnabled } = copyrightInfo;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />

        {isCopyrightEnabled ? (
          <p className="footer__text">
            © {new Date().getFullYear()} - Template developed by{' '}
            <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
              Jacobo Martínez
            </a>
          </p>
        ) : (
          <div className="footer__text">© {new Date().getFullYear()}</div>
        )}

        {isButtonsEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
