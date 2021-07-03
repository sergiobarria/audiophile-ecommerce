import { Link } from 'react-router-dom';

import { Categories } from '../../../types/types';
import { Card } from './CategoriesCard.styles';
import ButtonThree from '../../ui/button-3/ButtonThree';

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

export default CategoriesCard;
