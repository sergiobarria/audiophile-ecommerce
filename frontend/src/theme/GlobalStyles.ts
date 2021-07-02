import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body{
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    background-color: ${props => props.theme.lightestGrey};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
  }

  a, a:active {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3.5rem; // 56px
    line-height: 3.625rem; // 58px
    letter-spacing: 2px;
  }

  h2 {
    font-size: 2.5rem; // 40px
    line-height:  2.75rem; // 44px
    letter-spacing: 1.5px;
  }

  h3 {
    font-size: 2rem; // 32px
    line-height: 2.25rem; // 36px
    letter-spacing: 1.15px;
  }

  h4 {
    font-size: 1.75rem; // 28px
    line-height: 2.375rem; // 38px
    letter-spacing: 2px;
  }

  h5 {
    font-size: 1.5rem; // 24px
    line-height: 2.0625rem; // 33px
    letter-spacing: 1.7px;
  }

  h6 {
    font-size: 1.125rem; // 18px
    line-height: 1.5rem; // 24px
    letter-spacing: 1.3px;
  }

  .overline, .subtitle {
    color: ${props => props.theme.primary};
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    text-transform: uppercase;
  }

  .overline {
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    letter-spacing: 10px;
  }

  .subtitle {
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 1.5625rem;
    letter-spacing: 1px;
  }
`;
