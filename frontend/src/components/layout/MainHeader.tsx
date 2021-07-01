import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';

interface NavLinks {
  id: number;
  text: string;
  url: string;
}

const MainHeader = () => {
  const navLinks: NavLinks[] = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'headphones',
      url: '/categories/headphones',
    },
    {
      id: 3,
      text: 'speakers',
      url: '/categories/speakers',
    },
    {
      id: 4,
      text: 'earphones',
      url: '/categories/earphones',
    },
  ];

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
            <ul>
              {navLinks.map(navLink => (
                <li key={navLink.id}>
                  <Link to={navLink.url}>{navLink.text}</Link>
                </li>
              ))}
            </ul>
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

const Header = styled.header`
  height: 5.625rem;
  background-color: ${props => props.theme.darkGrey};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border-bottom: 1px solid rgba(151, 151, 151, 0.1);

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    /* This removes spaces beneath the images */
    img {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      padding: 2rem 2.5rem;

      a:first-of-type {
        margin-right: auto;
        padding-left: 2.625rem;
      }
    }

    @media screen and (min-width: 1024px) {
      padding: 2rem 2.5rem;

      button {
        display: none;
      }

      a:first-of-type {
        margin-right: 0;
        padding-left: 0;
      }
    }

    @media screen and (min-width: 1200px) {
      padding: 2rem 0;
    }
  }
`;

const NavLinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;

    ul {
      display: flex;
      list-style: none;

      li:not(:last-child) {
        margin-right: 2.125rem;
      }

      a {
        text-decoration: none;
        color: ${props => props.theme.white};
        font-size: 0.8125rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default MainHeader;
