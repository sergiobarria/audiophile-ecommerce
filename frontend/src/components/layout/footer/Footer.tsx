import { Link } from 'react-router-dom';

import NavLinks from '../nav-links/NavLinks';
import { Footer, FooterContainer } from './Footer.styles';

import { socialLinks } from '../../../data/social-links';

const MainFooter = () => {
  return (
    <Footer>
      <FooterContainer>
        <div>
          <Link to="/">
            <img src="assets/images/shared/desktop/logo.svg" alt="logo" />
          </Link>
          <NavLinks />
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div>
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="social-links">
            {socialLinks.map(socialLink => (
              <a href={socialLink.url} key={socialLink.id}>
                <img src={socialLink.src} alt={`${socialLink.name} icon`} />
              </a>
            ))}
          </div>
        </div>
      </FooterContainer>
    </Footer>
  );
};

export default MainFooter;
