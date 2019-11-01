import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #3498db, #8e44ad);
`;

export default () => (
  <Root>
    <LoginForm />
  </Root>
);
