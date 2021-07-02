import styled from 'styled-components';

export const Header = styled.header`
  height: 5.625rem;
  background-color: ${props => props.theme.darkerGrey};

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

export const NavLinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;

    ul {
      display: flex;

      li:not(:last-child) {
        margin-right: 2.125rem;
      }
    }
  }
`;
