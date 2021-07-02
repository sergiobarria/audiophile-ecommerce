import styled from 'styled-components';

const ButtonPrimary: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border: none;
  font-size: 0.8125rem;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.primaryLight};
  }
`;

export default ButtonPrimary;