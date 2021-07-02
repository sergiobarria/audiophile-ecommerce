import styled from 'styled-components';

export const Ul = styled.ul`
  a {
    text-decoration: none;
    color: ${props => props.theme.white};
    font-size: 0.8125rem;
    text-transform: uppercase;
    transition: color 200ms ease-in-out;
    font-weight: 600;

    &:hover {
      color: ${props => props.theme.primary};
    }
  }

  .link-active {
    color: ${props => props.theme.primary};
  }
`;
