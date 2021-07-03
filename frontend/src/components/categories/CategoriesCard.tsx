import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Categories } from '../../types/types';
import ButtonThree from '../ui/button-three/ButtonThree';

const CategoriesCard: React.FC<Categories> = ({ id, title, img, url }) => {
  return (
    <Card>
      <div>
        <img src={img} alt="category" />
      </div>
      <h6>{title}</h6>
      <Link to={url}>
        <ButtonThree>shop</ButtonThree>
      </Link>
    </Card>
  );
};

const Card = styled.article`
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

export default CategoriesCard;
