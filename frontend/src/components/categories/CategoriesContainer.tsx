import styled from 'styled-components';

import { Categories } from '../../types/types';
import CategoriesCard from './CategoriesCard';
import Container from '../helpers/container/Container';

const CategoriesSection: React.FC = () => {
  const categories: Categories[] = [
    {
      id: 1,
      title: 'headphones',
      img: 'assets/images/shared/desktop/image-headphones.png',
      url: '/categories/headphones',
    },
    {
      id: 2,
      title: 'speakers',
      img: 'assets/images/shared/desktop/image-speakers.png',
      url: '/categories/speakers',
    },
    {
      id: 3,
      title: 'earphones',
      img: 'assets/images/shared/desktop/image-earphones.png',
      url: '/categories/earphones',
    },
  ];

  return (
    <section>
      <Container>
        <CardsContainer>
          {categories.map(category => (
            <CategoriesCard key={category.id} {...category} />
          ))}
        </CardsContainer>
      </Container>
    </section>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 6rem 1.5rem;
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

export default CategoriesSection;
