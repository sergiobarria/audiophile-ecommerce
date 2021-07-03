import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 6rem 0 7.5rem;
  row-gap: 4.375rem;

  @media screen and (min-width: 768px) {
    column-gap: 10px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 30px;
  }
`;
