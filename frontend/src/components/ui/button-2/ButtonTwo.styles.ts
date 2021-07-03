import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border: 1px solid ${props => props.theme.black};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`;
