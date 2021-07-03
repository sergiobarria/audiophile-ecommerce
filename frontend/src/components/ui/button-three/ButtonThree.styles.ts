import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${props => props.theme.darkGrey};
  transition: all 200ms ease-in-out;

  img {
    margin-left: 1rem;
  }

  &:hover {
    color: ${props => props.theme.primary};
  }
`;
