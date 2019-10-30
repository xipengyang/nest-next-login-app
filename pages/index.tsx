import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #3498db, #8e44ad);
`;

const LoginForm = styled.form`
  width: 360px;
  height: 580px;
  padding: 5rem 3rem;
  border-radius: 10px;
  background: #fff;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Field = styled.div`
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 2rem 0;

  input {
    color: #333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 0.3125rem;
    height: 2.5rem;

    &:invalid:focus {
      & + span::before {
        font-size: 0.5rem;
        color: black;
        top: 0px;
      }
    }

    &:valid {
      & + span::before {
        font-size: 0.5rem;
        color: black;
        top: 0px;
      }
    }
  }

  span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 0.3125rem;
    color: #adadad;
    transform: translateY(-50%);
    transition: 0.35s;
  }
`;

const LoginBtn = styled.input`
  display: block;
  font-size: 1rem;
  width: 100%;
  height: 3.125rem;
  border: none;

  &:hover {
    background-image: linear-gradient(120deg, #3498db, #8e44ad);
    cursor: pointer;
  }
`;

const Index = () => {
  const [name, setName] = useState('');

  const onInputChange = () => {};

  return (
    <Root>
      <LoginForm>
        <h1> Dealer Portal</h1>

        <Field>
          <input type="text" onChange={onInputChange} required />
          <span data-placeholder="Username" />
        </Field>
        <Field>
          <input type="text" required />
          <span data-placeholder="Password" />
        </Field>

        <LoginBtn type="submit" value="Login" />
        <div>
          New to the app? <a href="#"> sign up now</a>
        </div>
      </LoginForm>
    </Root>
  );
};

export default Index;
