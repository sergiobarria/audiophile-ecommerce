import { Button } from './ButtonThree.styles';

const ButtonThree: React.FC = ({ children }) => {
  return (
    <Button>
      {children}{' '}
      <img
        src="assets/images/shared/desktop/icon-arrow-right.svg"
        alt="right arrow"
      />
    </Button>
  );
};

export default ButtonThree;
