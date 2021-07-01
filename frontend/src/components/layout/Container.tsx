import styled from 'styled-components';

const Container: React.FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

export default Container;
