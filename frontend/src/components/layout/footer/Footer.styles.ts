import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${props => props.theme.darkGrey};

  /* This removes spaces beneath the images */
  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

export const FooterContainer = styled.section`
  position: relative;
  max-width: 1110px;
  margin: 0 auto;
  padding: 3.25rem 1.5rem 2.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-of-type,
  p {
    text-align: center;
  }

  ul {
    margin: 3rem 0;
  }

  div:first-of-type {
    li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  p {
    color: ${props => props.theme.white};
    opacity: 0.5;
    font-size: 0.9375rem;
    font-weight: 200;
    line-height: 25px;
    margin-bottom: 3rem;
  }

  div > p {
    font-weight: 600;
  }

  .social-links {
    width: 104px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 200ms ease-in-out;

    a:hover {
      filter: brightness(0) invert(66%) sepia(22%) saturate(2719%)
        hue-rotate(329deg) brightness(92%) contrast(82%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: ${props => props.theme.primary};
  }

  @media screen and (min-width: 768px) {
    padding: 3.75rem 2.5rem 2.875rem;
    align-items: flex-start;

    div:first-of-type,
    p {
      text-align: left;
    }

    div:first-of-type {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      ul {
        display: flex;
        margin: 2rem 0;

        li:not(:last-child) {
          margin-right: 2.125rem;
        }
      }
    }

    div:last-child {
      width: 100%;
      display: flex;
      justify-content: space-between;

      p {
        margin-bottom: 0;
      }

      .social-links {
        flex-direction: row;
        width: 104px;
        justify-content: flex-end;
        margin-right: 0;

        a:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }

    &::before {
      left: 40px;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 4.6875rem 2.5rem 3rem;

    div:not(:last-child) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.25rem;

      ul {
        margin: 0;
      }
    }

    P {
      width: 32rem;
    }

    .social-links {
      margin-bottom: 0;
    }

    &::before {
      left: 2.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;

    &::before {
      left: 0;
    }
  }
`;
