import { Button } from './ButtonOne.styles';

export interface BtnProps {
  bgColor?: string;
  bgColorHover?: string;
}

const ButtonOne: React.FC<BtnProps> = ({ children, bgColor, bgColorHover }) => {
  return (
    <Button bgColor={bgColor} bgColorHover={bgColorHover}>
      {children}
    </Button>
  );
};

export default ButtonOne;
