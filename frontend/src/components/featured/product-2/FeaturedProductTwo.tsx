import { Link } from 'react-router-dom';

import { Wrapper } from './FeaturedProductTwo.styles';
import Container from '../../helpers/container/Container';
import ButtonTwo from '../../ui/button-2/ButtonTwo';

const FeaturedProductTwo = () => {
  return (
    <Container>
      <Wrapper>
        <div className="product-image"></div>
        <article>
          <h4>ZX7 speaker</h4>
          <Link to="/categories/speakers">
            <ButtonTwo>see product</ButtonTwo>
          </Link>
        </article>
      </Wrapper>
    </Container>
  );
};

export default FeaturedProductTwo;
