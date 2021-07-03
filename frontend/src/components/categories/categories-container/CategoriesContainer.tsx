import CategoriesCard from '../categories-card/CategoriesCard';
import Container from '../../helpers/container/Container';
import { CardsContainer } from './CategoriesContainer.styles';

import { categories } from '../../../data/categories';

const CategoriesSection: React.FC = () => {
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

export default CategoriesSection;
