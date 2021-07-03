import { Link } from 'react-router-dom';

import Container from '../../helpers/container/Container';
import ButtonOne from '../../ui/button-1/ButtonOne';

import { Wrapper } from './FeaturedProductOne.styles';

const FeaturedProductOne = () => {
  return (
    <Container>
      <Wrapper>
        <div className="bg-image">
          <img
            src="assets/images/home/desktop/image-speaker-zx9.png"
            alt="product"
          />
        </div>

        <article>
          <h2>zx9 speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Link to="/categories/speakers">
            <ButtonOne bgColor="#000" bgColorHover="#4C4C4C">
              see product
            </ButtonOne>
          </Link>
        </article>
      </Wrapper>
    </Container>
  );
};

export default FeaturedProductOne;
