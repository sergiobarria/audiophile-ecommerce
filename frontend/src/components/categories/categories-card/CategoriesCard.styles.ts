import styled from 'styled-components';

export const Card = styled.article`
  background-color: ${props => props.theme.lightGrey};
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  position: relative;
  height: 10.3125rem;

  & > div {
    position: absolute;
    top: -3.5rem;
    width: 10rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  h6 {
    margin-top: 5.625rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: span 1;
  }

  @media screen and (min-width: 1024px) {
    height: 12.75rem;

    & > div {
      top: -4rem;
      width: 12rem;
    }

    h6 {
      margin-top: 7.25rem;
    }
  }
`;
