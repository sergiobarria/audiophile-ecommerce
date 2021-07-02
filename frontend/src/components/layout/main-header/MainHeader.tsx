import { Link } from 'react-router-dom';

import Container from '../container/Container';
import NavLinks from '../nav-links/NavLinks';
import { Header, NavLinksContainer } from './MainHeader.styles';

const MainHeader = () => {
  return (
    <Header>
      <Container>
        <nav>
          <button type="button">
            <img
              src="assets/images/shared/tablet/icon-hamburger.svg"
              alt="mobile menu icon"
            />
          </button>

          <Link to="/">
            <img src="assets/images/shared/desktop/logo.svg" alt="logo" />
          </Link>

          <NavLinksContainer>
            <NavLinks />
          </NavLinksContainer>

          <Link to="/checkout">
            <img
              src="assets/images/shared/desktop/icon-cart.svg"
              alt="cart icon"
            />
          </Link>
        </nav>
      </Container>
    </Header>
  );
};

export default MainHeader;
