import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../helpers/container/Container';
import ButtonTwo from '../../ui/button-2/ButtonTwo';

const FeaturedProductThree = () => {
  return (
    <Container>
      <Wrapper>
        <div className="product-image"></div>
        <article className="card">
          <div>
            <h4>yx1 earphones</h4>
            <Link to="/categories/earphones">
              <ButtonTwo>see product</ButtonTwo>
            </Link>
          </div>
        </article>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 7.5rem;
  row-gap: 1.5rem;

  .product-image {
    background-image: url('assets/images/home/mobile/image-earphones-yx1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 12.5rem;
    width: 100%;
    grid-column: span 2;
    border-radius: 8px;
  }

  article {
    grid-column: span 2;
    height: 12.5rem;
    background-color: ${props => props.theme.lightGrey};
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;

    h4 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    column-gap: 11px;
    height: 20rem;

    .product-image {
      grid-column: span 1;
      background-image: url('assets/images/home/tablet/image-earphones-yx1.jpg');
      height: 100%;
    }

    article {
      grid-column: span 1;
      padding-left: 2.5625rem;
      height: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    column-gap: 30px;

    .product-image {
      background-image: url('assets/images/home/desktop/image-earphones-yx1.jpg');
    }

    article {
      padding-left: 5.9375rem;
    }
  }
`;

export default FeaturedProductThree;
