import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-color: ${props => props.theme.darkGrey};
  height: 31.875rem;

  .hero-image {
    background-image: url('assets/images/home/mobile/image-header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 31.875rem;
  }

  article {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20.5rem;

    h1 {
      color: ${props => props.theme.white};
      margin: 1rem 0;
      text-align: center;
      font-size: 2.25rem;
      line-height: 40px;
    }

    h6 {
      color: ${props => props.theme.white};
      opacity: 50%;
    }

    p {
      color: ${props => props.theme.white};
      opacity: 0.75;
      text-align: center;
      font-weight: 300;
    }

    button {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40rem;

    .hero-image {
      background-image: url('assets/images/home/tablet/image-header.jpg');
      height: 40rem;
    }

    article {
      h1 {
        font-size: 3.5rem; // 56px
        line-height: 3.625rem; // 58px
        margin-top: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .hero-image {
      background-image: url('assets/images/home/desktop/image-hero.jpg');
    }

    article {
      left: 0;
      transform: translateY(-50%);
      align-items: flex-start;
      max-width: 24rem;

      h1,
      p {
        text-align: left;
      }
    }
  }
`;
