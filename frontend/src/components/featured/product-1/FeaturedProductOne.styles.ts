import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 8px;
  height: 37.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    background-image: url('assets/images/home/desktop/pattern-circles.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top calc(-8rem + 70%) center;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

  .bg-image {
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    img {
      width: 11rem;
      object-fit: contain;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.white};
    padding: 0 1.5rem;
    max-width: 21.875rem;
    margin: 0 auto;
    z-index: 10;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      padding: 0 1rem;
    }

    button {
      margin-top: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    height: 45rem;

    &::before {
      background-size: 130%;
    }

    .bg-image {
      align-items: center;

      img {
        width: 12.5rem;
      }
    }

    article {
      h2 {
        font-size: 3.5rem;
        line-height: 58px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 35rem;

    &::before {
      background-size: 80%;
      background-position: left -7.5rem bottom 90%;
    }

    .bg-image {
      position: absolute;
      bottom: 4rem;
      left: 7.5rem;

      img {
        width: 25.625rem;
      }
    }

    article {
      position: absolute;
      width: 21.875rem;
      align-items: flex-start;
      text-align: left;
      right: 6rem;
      top: 50%;
      transform: translateY(-50%);

      p {
        padding: 0;
      }
    }
  }
`;
